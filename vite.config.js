import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fiverr/', // Thay 'fiverr' bằng tên repository của bạn
  build: {
    outDir: 'dist',
  },
});
