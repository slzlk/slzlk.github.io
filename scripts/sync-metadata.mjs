import fs from "node:fs/promises";
import ts from "typescript";
const code = await fs.readFile(
  new URL("../src/config/site.ts", import.meta.url),
  "utf8",
);
const js = ts.transpileModule(code, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { siteConfig } = await import(
  `data:text/javascript;base64,${Buffer.from(js).toString("base64")}`
);
const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const page = new URL("../index.html", import.meta.url);
let html = await fs.readFile(page, "utf8");
html = html.replace(
  /<title>[\s\S]*?<\/title>/,
  `<title>${escape(siteConfig.title)}</title>`,
);
html = html.replace(
  /(<meta\s+name="description"\s+content=")[^"]*("\s*\/?\s*>)/,
  `$1${escape(siteConfig.description)}$2`,
);
html = html.replace(
  /(<meta\s+name="theme-color"\s+content=")[^"]*("\s*\/?\s*>)/,
  `$1${escape(siteConfig.theme.background)}$2`,
);
await fs.writeFile(page, html);
console.log("Page metadata synchronized from src/config/site.ts");
