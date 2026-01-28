// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // 確保已安裝此套件

export default defineConfig({
    output: 'server', // 必須開啟 server 模式才能執行 API
    adapter: vercel({
        functionPerRoute: true, // 重要：這會將 /api/redeploy 拆分成獨立 Function
    }),
});