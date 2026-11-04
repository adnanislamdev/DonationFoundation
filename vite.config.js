import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const apiRoutes = ['/create-payment-intent', '/payment-summary']

// Runs the Vercel functions in api/ during `npm run dev`, so local testing
// uses the same code as the live site without needing a separate server.
function localApi() {
  return {
    name: 'local-api',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      process.env.STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY

      server.middlewares.use('/api', async (req, res) => {
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        }

        if (!apiRoutes.includes(req.url)) {
          return res.status(404).json({ error: 'Not found.' })
        }

        let raw = ''
        for await (const chunk of req) raw += chunk
        try {
          req.body = raw ? JSON.parse(raw) : {}
        } catch {
          return res.status(400).json({ error: 'Invalid JSON.' })
        }

        const route = await server.ssrLoadModule(`/api${req.url}.js`)
        return route.default(req, res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    localApi(),
  ],
})
