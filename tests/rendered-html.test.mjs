import assert from "node:assert/strict";
import test from "node:test";

test("single-file page contains its HTML, CSS, and JavaScript", async () => {
  const workerUrl = new URL(`../dist/server/index.js?test=${Date.now()}`, import.meta.url);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("https://example.com/"),
    { ASSETS: { fetch: async () => new Response("asset") } },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html/);
  assert.match(html, /<style>[\s\S]*<\/style>/);
  assert.match(html, /<script>[\s\S]*<\/script>/);
  assert.match(html, /<span class="badgeName">NANA<\/span>/);
  assert.match(html, /Microsoft JhengHei/);
  assert.match(html, /jiana-cartoon\.png/);
  assert.doesNotMatch(html, /src=["'][^"']+\.js/);
  assert.doesNotMatch(html, /rel=["']stylesheet/);
});
