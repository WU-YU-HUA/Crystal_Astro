export default async function handler(req, res) {
    // 原生環境必須使用 process.env，不能用 import.meta.env
    const API_URL = process.env.DEPLOY_URL;
    const CRON_SECRET = process.env.CRON_SECRET;

    // 1. 檢查變數是否抓得到 (這是 500 錯誤最常見的原因)
    if (!API_URL) {
      return res.status(500).json({ error: "Missing DEPLOY_URL in environment" });
    }

    // 2. 驗證身分 (你直接輸入網址時，因為沒帶 Header，這步會回傳 401，這是正常的)
    const authHeader = req.headers['authorization'];
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return res.status(401).send('Unauthorized');
    }

    try {
      // 3. 執行請求
      const fetchRes = await fetch(API_URL, { method: 'POST' });
      
      return res.status(200).json({ 
        success: true, 
        upstreamStatus: fetchRes.status 
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
}