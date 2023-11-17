
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// eslint-disable-next-line no-undef
const rootDir = path.resolve(__dirname, '.');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Псевдоним для пути src
      '@/': path.resolve(rootDir, 'src') + '/',
      // Псевдоним для пути public
      '@public/': path.resolve(rootDir, 'public') + '/',
    },
  },
});