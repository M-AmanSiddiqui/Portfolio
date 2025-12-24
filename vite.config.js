import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure binary assets (including upper/lowercase variants) are treated as static assets during build
  assetsInclude: [
    "**/*.JPG",
    "**/*.jpg",
    "**/*.PNG",
    "**/*.png"
  ]
})


