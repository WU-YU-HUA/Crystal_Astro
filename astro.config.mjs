// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
    adapter: vercel({
        // 關鍵設定：強制讓每個路由生成獨立的 Function
        functionPerRoute: true, 
        webAnalytics: {
            enabled: true,
        },
    }),
    output: 'server'
});