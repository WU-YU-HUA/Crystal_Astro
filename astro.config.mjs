// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // 確保已安裝此套件

export default defineConfig({
    output: 'hybrid', // 必須開啟 server 模式才能執行 API
    adapter: vercel(),
});