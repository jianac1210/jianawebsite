import { cp, mkdir, rm } from "node:fs/promises";

await rm("netlify-dist", { recursive: true, force: true });
await mkdir("netlify-dist", { recursive: true });
await cp("index.html", "netlify-dist/index.html");
await cp("public", "netlify-dist", { recursive: true });
