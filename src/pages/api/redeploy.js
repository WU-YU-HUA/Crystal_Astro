export const prerender = false; // 強制不使用預渲染

export async function GET({ request }) {
    const API_URL = process.env.DEPLOY_URL;
    const CRON_SECRET = process.env.CRON_SECRET;

    if (!API_URL) {
      return new Response("No API URL", {status: 400})
    }
    // 驗證 Vercel Cron 身份
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const res = await fetch(API_URL, { method: 'POST' });
        return new Response(JSON.stringify({ success: true, status: res.status }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message, status: "Final Failed" }), { status: 500 });
    }
}