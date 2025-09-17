import { defineConfig } from 'vite';

export default defineConfig({
  appId: "com.example.finfriend",
  root: '.',
  appName: "FinFriend",
  webDir: "www",
  bundledWebRuntime: false,
  build: {
    outDir: 'www', // Output directory for built files
    emptyOutDir: true, // Ensure the directory is cleared before building
  },
});