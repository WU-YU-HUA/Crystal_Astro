import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // 必須保留，否則 API 無法運作
  // adapter: vercel({
  //   functionPerRoute: true, // 核心：將 API 拆分成獨立 Function
  //   edge: false, // 確保使用標準 Serverless Functions
  // }),
});