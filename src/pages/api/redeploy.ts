export const prerender = false; // 強制此 API 為動態執行，不進行預渲染

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({request}) => {
    const API_URL = "https://api.vercel.com/v1/integrations/deploy/prj_I7A0fdp3WcRRzsacqwbRZOBi2lzx/AmfK6DdrM8"

    try{
        const res = await fetch(API_URL, {method: 'POST'})

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
