import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import GlobPlugin from 'vite-plugin-glob'

export default defineConfig({
  plugins: [vue(), GlobPlugin({}),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
