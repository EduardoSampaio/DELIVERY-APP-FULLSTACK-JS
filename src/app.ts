import Fastify from 'fastify'
import { authRoutes } from './api/routes/auth/auth.routes'


export const app = Fastify({
  logger: true
})

app.get('/health', async () => {
  return "Funcionando..."
})

app.register(authRoutes)
