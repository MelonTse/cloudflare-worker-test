export default {
  async fetch(request) {
    const now = new Date().toISOString();

    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>My First Cloudflare Worker</title>
        </head>
        <body style="font-family: Arial; padding: 50px;">
          <h1>🎉 Cloudflare Worker 运行成功！</h1>
          <p>这是我的第一台 Cloudflare Serverless 服务。</p>
          <p>当前服务器时间：</p>
          <strong>${now}</strong>
        </body>
      </html>`,
      {
        headers: {
          "content-type": "text/html; charset=UTF-8",
        },
      }
    );
  },
};
