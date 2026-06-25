import { Hono } from 'hono'
import { ticketQrRoute } from './routes/ticket-qr.route'
import type { AppBindings } from './types/bindings'
import { etcCors } from './utils/cors'

const app = new Hono<{ Bindings: AppBindings }>()

app.use('/api/*', etcCors())

app.get('/', (c) => {
  return c.json({ service: 'etc-be', status: 'ok' })
})

app.get('/health', (c) => {
  return c.json({ service: 'etc-be', status: 'healthy' })
})

app.route('/api', ticketQrRoute)

export default app
