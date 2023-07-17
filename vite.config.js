import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    Components(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        
      }
    }
  }
})
