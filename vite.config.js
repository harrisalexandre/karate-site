import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/karate-site/', // Caminho do repositório no GitHub Pages
  server: {
    port: 3000, // Porta do servidor local
  },
  build: {
    outDir: 'dist', // Diretório de saída do build
  },
});
