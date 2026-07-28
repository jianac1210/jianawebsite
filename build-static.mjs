import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await cp("public", "dist/public", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");

const html = await readFile("index.html", "utf8");
const worker = `const html=${JSON.stringify(html)};
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(html, { headers: { "content-type": "text/html; charset=UTF-8" } });
    }
    const assetUrl = new URL(request.url);
    assetUrl.pathname = "/public" + assetUrl.pathname;
    return env.ASSETS.fetch(new Request(assetUrl, request));
  }
};`;

await writeFile("dist/server/index.js", worker);
