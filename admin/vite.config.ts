import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ }) => {
  console.log('Vite is running', __dirname)
  return {
    server: {
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    },
    build: {
      sourcemap: true
    }
  }
})
