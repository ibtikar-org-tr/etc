import type { Context } from 'hono'
import { cors } from 'hono/cors'
import type { AppBindings } from '../types/bindings'

const LOCAL_DEV_ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5938',
  'http://127.0.0.1:5938',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
]

const PRODUCTION_ORIGINS = ['https://etc.ibtikar.tr']

function isLocalWorkerRequest(c: Context<{ Bindings: AppBindings }>): boolean {
  const hostname = new URL(c.req.url).hostname
  return hostname === 'localhost' || hostname === '127.0.0.1'
}

function buildAllowedOrigins(c: Context<{ Bindings: AppBindings }>): Set<string> {
  const allowed = new Set<string>(PRODUCTION_ORIGINS)
  const configured = c.env.FRONTEND_BASE_URL?.trim()

  if (configured) {
    allowed.add(configured)
  }

  if (isLocalWorkerRequest(c)) {
    for (const origin of LOCAL_DEV_ORIGINS) {
      allowed.add(origin)
    }
  }

  return allowed
}

export function etcCors() {
  return cors({
    origin: (origin, c) => {
      const allowed = buildAllowedOrigins(c as Context<{ Bindings: AppBindings }>)

      if (origin && allowed.has(origin)) {
        return origin
      }

      const configured = (c.env as AppBindings).FRONTEND_BASE_URL?.trim()
      return configured || origin || ''
    },
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
    exposeHeaders: [
      'Content-Disposition',
      'X-Attendee-Name',
      'X-Attendee-Name-Ar',
      'X-Attendee-Name-En',
      'X-Registration-Id',
      'X-Certificate-Template',
    ],
  })
}
