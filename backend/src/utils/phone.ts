export function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '')
}

/** Match local/international variants (e.g. 05070309989 vs +905070309989). */
export function phonesMatch(stored: string, lookup: string): boolean {
  const a = normalizePhone(stored)
  const b = normalizePhone(lookup)
  if (!a || !b) return false
  if (a === b) return true

  const minLen = 10
  if (a.length >= minLen && b.length >= minLen) {
    return a.slice(-minLen) === b.slice(-minLen)
  }

  return false
}
