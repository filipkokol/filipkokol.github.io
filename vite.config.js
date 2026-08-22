import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 81 }, // pri 80 je nek bug na eni sliki
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      webp: { quality: 75, lossless: false },
    }),
  ],
});
