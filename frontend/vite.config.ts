import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

const DEFAULT_BACKEND_URL = 'http://localhost:5939'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const backendUrl = env.VITE_ETC_BE?.trim() || DEFAULT_BACKEND_URL

  return {
    plugins: [react(), tailwindcss(), cloudflare()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5938,
      proxy: {
        '/api': {
          target: backendUrl,
          changeOrigin: true,
        },
      },
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  }
})
