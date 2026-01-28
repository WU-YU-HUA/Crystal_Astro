// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
    adapter: vercel({
        // 確保這兩項設定同時存在
        functionPerRoute: true, 
        // 強制使用獨立 Function 的策略
        deploymentStrategy: 'static', 
        webAnalytics: {
            enabled: true,
        },
    }),
    output: 'server'
});