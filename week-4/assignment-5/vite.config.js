import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/remote-assignments/week-4/assignment-5/dist',
  plugins: [react()],
})
