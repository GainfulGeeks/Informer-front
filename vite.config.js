import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    // https://vitejs.dev/config/server-options#server-proxy
    server: {
      proxy: {
        '/api': {
          target: 'https://localhost:7178',
          secure: false,
          changeOrigin: true,
        },
      },
    }
})

