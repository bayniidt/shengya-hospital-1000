import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({ base: '/admin/', plugins: [vue()], server: { port: 5174, proxy: { '/api': 'http://localhost:4000' } }, build: { outDir: 'dist' } });
