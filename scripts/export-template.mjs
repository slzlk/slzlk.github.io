import fs from "node:fs/promises";
import ts from "typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const release = path.join(root, "release");
await fs.mkdir(release, { recursive: true });
const target = await fs.mkdtemp(path.join(release, "studio-template-"));
// A positive allowlist keeps personal history, Git settings and legacy exercises out.
for (const name of [
  "src",
  "public",
  "scripts",
  "docs",
  "index.html",
  "package.json",
  "package-lock.json",
  "vite.config.ts",
  "tsconfig.json",
  "tsconfig.app.json",
  "tsconfig.node.json",
  ".gitignore",
]) {
  await fs.cp(path.join(root, name), path.join(target, name), {
    recursive: true,
  });
}
const configPath = path.join(target, "src/config/site.ts");
let config = await fs.readFile(configPath, "utf8");
const compiled = ts.transpileModule(config, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { siteConfig: identity } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
for (const [from, to] of [[identity.email, 'hello@example.com'], [identity.brand, '你的品牌 · STUDIO'], [identity.name, '你的品牌'], [identity.signature, 'Hello ♡']]) {
  if (from) config = config.replaceAll(from, to);
}
config = config.replace(
  /export const projects: Project\[\] = \[[\s\S]*?\];?\s*export const processSteps/,
  `export const projects: Project[] = [
  { index: '01', title: '品牌展示站 · 示例', description: '模板内容示例：在这里介绍你自己的项目用途与内容。', points: ['品牌介绍', '响应式布局', '联系入口'], tags: ['Vue3', 'TypeScript', '展示站'], accent: 'cyan', context: '示例场景，请替换为你有权公开展示的真实项目。', approach: '写清楚你的职责与实现方式，不使用示例内容冒充实际客户经历。' },
  { index: '02', title: '对话界面 · 示例', description: '模板内容示例：用界面展示对话、输入与消息状态。', points: ['消息列表', '输入与停止', '空状态引导'], tags: ['Vue3', '交互演示'], accent: 'violet', context: '本地预设内容示例，不连接真实模型。', approach: '可在独立演示页体验生成、停止与清空交互。正式接入由服务端提供安全接口。' },
]
export const processSteps`,
);
if (!config.includes("品牌展示站 · 示例") || (identity.email !== "hello@example.com" && config.includes(identity.email))) throw new Error("Template anonymization failed");
await fs.writeFile(configPath, config);
const projectsPath = path.join(target, "src/components/ProjectsSection.vue");
await fs.writeFile(
  projectsPath,
  (await fs.readFile(projectsPath, "utf8")).replace(
    "参与项目选摘，名称已作匿名处理。",
    "模板内容示例，请替换为你的项目。",
  ),
);
const cardPath = path.join(target, 'src/components/ProjectCard.vue');
await fs.writeFile(cardPath, (await fs.readFile(cardPath, 'utf8')).replace('匿名项目经历 · 展示画面为内容示意，不是客户产品截图。', '模板案例示例 · 请替换为你有权公开的内容，示意图不是真实产品截图。'));
const pkg = JSON.parse(
  await fs.readFile(path.join(target, "package.json"), "utf8"),
);
pkg.name = "cream-studio-template";
await fs.writeFile(
  path.join(target, "package.json"),
  JSON.stringify(pkg, null, 2) + "\n",
);
const lockPath = path.join(target, "package-lock.json");
const lock = JSON.parse(await fs.readFile(lockPath, "utf8"));
lock.name = pkg.name;
if (lock.packages?.[""]) lock.packages[""].name = pkg.name;
await fs.writeFile(lockPath, JSON.stringify(lock, null, 2) + "\n");
await fs.copyFile(
  path.join(root, "docs/TEMPLATE-GUIDE.md"),
  path.join(target, "README.md"),
);
await fs.copyFile(
  path.join(root, "docs/ASSETS.md"),
  path.join(target, "ASSETS.md"),
);
console.log(`Template source exported: ${target}`);
console.log("Run npm ci and npm run build in that directory before delivery.");
