import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // Only proxy in local dev — in production, VITE_API_BASE points to the real backend
    proxy: command === 'serve' ? {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    } : {}
  }
}))
