import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const API_URL = process.env.DEPLOY_URL; // 原生環境使用 process.env

    // 檢查認證
    const authHeader = request.headers['authorization'];
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return response.status(401).send('Unauthorized');
    }

    try {
        const res = await fetch(API_URL!, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.VERCEL_TOKEN}`,
            'Content-Type': 'application/json'
        }
        });

        return response.status(200).json({
        message: "Success",
        status: res.status
        });
    } catch (error) {
        return response.status(500).json({ message: "Failed" });
    }
}