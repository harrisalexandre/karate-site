import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/karate-site/', // Define o path base para GitHub Pages
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
  },
  build: {
    outDir: 'build', // Diretório de saída do build
  },
});
