import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// https://vite.dev/config/
export default defineConfig((env) => {
  let alias = {}
  if (env.mode == 'development') {
    alias = {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'ethr-did-resolver': path.resolve('./node_modules/ethr-did-resolver/src/index.ts'),
    }
  }

  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias,
    },
  }
})
