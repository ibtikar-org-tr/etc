export interface GoogleServiceAccountCredentials {
  type: string
  project_id: string
  private_key_id: string
  private_key: string
  client_email: string
  client_id: string
  auth_uri: string
  token_uri: string
  auth_provider_x509_cert_url: string
  client_x509_cert_url: string
}

let cachedAccessToken: string | null = null
let cachedTokenExpiry = 0

function base64UrlEncode(value: string): string {
  return btoa(value).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const b64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s+/g, '')

  const binary = atob(b64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes.buffer
}

async function createJwt(
  credentials: GoogleServiceAccountCredentials,
  scope: string,
): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const header = {
    alg: 'RS256',
    typ: 'JWT',
    kid: credentials.private_key_id,
  }
  const payload = {
    iss: credentials.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }

  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  const data = `${encodedHeader}.${encodedPayload}`

  const key = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(credentials.private_key),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  )

  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(data))
  const signatureBase64 = base64UrlEncode(String.fromCharCode(...new Uint8Array(signature)))

  return `${data}.${signatureBase64}`
}

async function getAccessToken(credentials: GoogleServiceAccountCredentials): Promise<string> {
  if (cachedAccessToken && Date.now() < cachedTokenExpiry) {
    return cachedAccessToken
  }

  const assertion = await createJwt(credentials, 'https://www.googleapis.com/auth/spreadsheets.readonly')
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })

  if (!response.ok) {
    throw new Error(`Google OAuth failed (${response.status})`)
  }

  const data = (await response.json()) as { access_token: string; expires_in: number }
  cachedAccessToken = data.access_token
  cachedTokenExpiry = Date.now() + data.expires_in * 1000 - 60_000

  return cachedAccessToken
}

export function parseGoogleCredentials(raw: string | undefined): GoogleServiceAccountCredentials | null {
  if (!raw?.trim()) return null

  try {
    return JSON.parse(raw) as GoogleServiceAccountCredentials
  } catch {
    return null
  }
}

export async function fetchSheetValues(
  credentials: GoogleServiceAccountCredentials,
  spreadsheetId: string,
  range: string,
): Promise<string[][]> {
  const token = await getAccessToken(credentials)
  const encodedRange = encodeURIComponent(range)
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedRange}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )

  if (!response.ok) {
    throw new Error(`Google Sheets API failed (${response.status})`)
  }

  const data = (await response.json()) as { values?: string[][] }
  return data.values ?? []
}
