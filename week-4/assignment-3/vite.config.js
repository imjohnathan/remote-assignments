import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/remote-assignments/week-4/assignment-3/dist',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#root': resolve(__dirname)
    }
  }
})
