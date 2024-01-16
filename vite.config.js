import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'MUI Keep',
        short_name: 'MUI Keep',
        theme_color: '#000',
      },
      strategies: ['cacheFirst', 'networkFirst'],
    }),
  ],
})