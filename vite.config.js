import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pizzeria_mamma_mia/",
  build: {
    outDir: "dist", // explicitamente la carpeta de salida
  }
});
