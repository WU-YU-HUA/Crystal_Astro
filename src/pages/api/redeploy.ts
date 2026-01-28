export const prerender = false; // 強制此 API 為動態執行，不進行預渲染

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({request}) => {
    const API_URL = import.meta.env.DEPLOY_URL

    //檢查是不是Vercel 發送的請求
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${import.meta.env.CRON_SECRET}`) { //Setting in Vercel Environment
        return new Response("Unauthorized", { status: 401 });
    }

    try{
        const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VERCEL_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        )

        return new Response(
            JSON.stringify({
                message: "Success",
                status: res.status
            }), {
                status: 200,
                headers: {"Content-Type": "application/json"}
            }
        );
    } catch (error){
        return new Response(
            JSON.stringify({message: "Failed"}),
            {status: 500, headers: {"Content-Type": "application/json"}}
        );
    }
}
