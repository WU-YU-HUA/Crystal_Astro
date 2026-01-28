export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const API_URL = undefined                          ;
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${undefined                           }`) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const res = await fetch(API_URL, { method: "POST" });
    return new Response(
      JSON.stringify({
        message: "Success",
        status: res.status
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
