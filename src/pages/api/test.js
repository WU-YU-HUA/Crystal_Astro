export const prerender = false; // 強制不使用預渲染

export const GET = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "這是一個 Cron Test API",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};