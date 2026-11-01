# Cream Studio · 模板使用手册

Vue 3 + TypeScript + Vite 的个人品牌 / 工作室展示模板，包含主站、品牌展示演示和本地 AI 对话演示。无需后端即可部署静态版本。

## 安装与运行

建议使用 Node.js 22 LTS。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` 自动同步网页标题、描述和主题色，并运行 TypeScript 检查；产物在 `dist/`。交付给买家后，不应直接双击 `dist/index.html`，而应通过 HTTP 预览或部署。

## 第一处修改：src/config/site.ts

所有品牌与业务内容集中在此文件：

- `siteConfig`：名称、品牌、签名、邮箱、页面标题与描述。
- `siteConfig.hero`：首屏文案和背景图路径。
- `siteConfig.about`：个人 / 工作室介绍和合作理念。
- `siteConfig.theme`：主色、文字色、辅助文字色与背景色；装饰画面仍有独立配色。
- `siteConfig.sections`：开关演示、项目、服务、关于、流程和 FAQ，导航会同步调整。
- `services`：四类服务的介绍、交付清单、准备材料与范围。
- `projects`：案例介绍、场景、参与工作、功能与技术。没有实际经历时可关闭此区块。
- `processSteps` 与 `faqs`：合作步骤与常见问题。

开发站点使用站主的真实邮箱；**交付包已替换为 `hello@example.com`**。买家必须先改为自己的地址。配置变更后重新构建。

## 图片与图标

背景素材位于 `public/images/studio-hero.jpg`，配置中填写 `images/studio-hero.jpg`。推荐替换为自己有使用权的图片；保持横向构图并在左侧留出文案空间。

四个服务图标在 `src/components/ServiceIcon.vue` 中以 SVG 绘制，无图标字体与外部 CDN 依赖。详见 `ASSETS.md` / `docs/ASSETS.md`。

## 页面与功能

- 首页：`/`，主导航、响应式布局、案例弹窗、服务范围展开、FAQ 与咨询表单。
- 品牌展示演示：`?demo=portfolio`，含作品分类筛选、锚点导航和示例表单反馈。
- 对话演示：`?demo=assistant`，含预设问题、逐字输出、停止、清空、Enter 发送、Shift + Enter 换行。
- 作品“查看详情”：原生 dialog 支持 Escape 关闭、键盘焦点限制与返回触发按钮。
- 主站表单：利用 mailto 准备邮件，用户在自己的邮件应用完成发送。未接入提交服务、CRM、数据库或自动邮件；可用“复制需求”作为替代。
- 演示表单：只验证输入和显示成功反馈，不发送或保存内容。
- 对话演示：使用本地预设回复，不接真实模型、知识库或外部服务，也不上传输入。

## 部署

默认相对路径可部署到域名根目录或静态子目录。构建后上传整个 `dist/`，保持资源目录结构不变。查询参数演示不依赖服务端路由回退。

GitHub Pages 项目仓库可把发布工作流设为 `npm ci` → `npm run build` → 上传 `dist`。模板交付包不包含原站的 Git 历史、GitHub 工作流或仓库身份。Vercel / Netlify 等静态托管可设置构建命令 `npm run build`，输出 `dist`。

若托管需要显式前缀，可在项目根目录新增 `.env.production`：

```text
VITE_BASE_PATH=/your-path/
```

## 交付范围与二次开发

这是可配置的**前端模板**。不包含可直接售卖的真实 AI 后端、小程序成品、支付、会员、CMS 或自动表单服务；不要向买家承诺这些已包含。AI 接入需要服务端保护密钥，不能把服务密钥写进前端源码或配置。

## 卖家发布前确认

- 品牌与邮箱已替换，作品内容是自己有权展示的内容。
- 桌面 / 手机、弹窗、表单校验、链接和部署路径已检查。
- 明确售卖的是源码模板还是定制服务，写清兼容环境和支持范围。
- 单独确定销售授权、使用数量、再分发限制、售后与退款规则。此源码交付包没有自动制定这些交易条款，也不表示作者已授予第三方转售许可。

## 再导出一个干净副本

```sh
npm run template:export
```

输出到 `release/studio-template-*`。导出采用文件白名单，替换个人品牌、邮箱与案例，不包含 Git、node_modules、历史练习目录或原站公司履历。不要把整个开发仓库直接打包给买家。
