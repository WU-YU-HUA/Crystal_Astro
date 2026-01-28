export default async function handler(req, res) {
    // 1. 取得變數 (原生 Node 環境使用 process.env)
    const API_URL = process.env.DEPLOY_URL;
    const CRON_SECRET = process.env.CRON_SECRET;

    // 2. 驗證 Vercel Cron 發出的 Authorization Header
    const authHeader = req.headers['authorization'];
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return res.status(401).send('Unauthorized');
    }

    try {
      // 3. 執行重新部署
      // 注意：如果是打 Vercel Deploy Hook，通常不需要額外 Token，Hook URL 本身就帶有權限
      const fetchRes = await fetch(API_URL, {
        method: 'POST'
      });

      return res.status(200).json({ 
        success: true, 
        status: fetchRes.status 
      });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
}