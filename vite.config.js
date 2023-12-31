import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: 'https://jaimereyess.github.io/game-news/', 
  build: {
    outDir: 'dist'

  }
})
