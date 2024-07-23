import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
        scss: {
            quietDeps: true
        },
    }
  },
  server: {
    hmr: {
        overlay: false
    },
    proxy: {
        '/boards': {
            target: 'http://127.0.0.1:3001',
            changeOrigin: true,
            secure: false,
        }
    }
  }
})
