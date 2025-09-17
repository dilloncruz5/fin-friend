import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'www', // Output directory for built files
    emptyOutDir: true, // Ensure the directory is cleared before building
  },
});