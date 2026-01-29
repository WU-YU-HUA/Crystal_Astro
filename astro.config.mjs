import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // 必須保留，否則 API 無法運作
  adapter: vercel(),
});