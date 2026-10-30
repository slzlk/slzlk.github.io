# 丽丽 · 个人作品与定制服务

基于原仓库 `https://github.com/slzlk/slzlk.github.io` 改版，沿用 Vue 3、TypeScript、Vite 和 GitHub Pages 部署方式。

## 本地使用

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` 包含 `vue-tsc -b` 类型检查，产物位于 `dist/`。原有 GitHub Actions 在 `master` 推送后发布至 GitHub Pages。推送到 `master` 后，由仓库现有工作流构建并发布。

## 本次改版

- 页面名称统一为丽丽，采用暖米白、奶油与焦糖色、衬线标题和留白。
- 页面顺序：个人介绍、四类定制服务、AI 案例、精选作品、关于与经历、合作流程、技术方向、联系。
- 保留原站项目、公司、时间与职责描述；不新增客户评价、业绩或项目数量。首页不再展示统计数字。
- AI 手机界面标为交互示意，项目装饰图不作为真实截图，项目卡片不伪装为可点击链接。
- 联系区沿用原站公开邮箱，支持带咨询主题的邮件入口、复制邮箱和失败时手动复制提示。
- `Fenjiu/`、`flower/`、`browers/` 历史文件保持原样；首页构建与原部署方式保持一致。

## 已完成检查（2026-10-30）

- `npm ci`、`npm run build`（包含类型检查）、`git diff --check` 通过。
- 本地预览 HTTP 200；桌面与 390px 手机视口检查无横向溢出。
- 案例切换、手机菜单展开与选中后收起、复制邮箱成功提示通过浏览器验证。
- 浏览器未记录错误或警告；邮件链接地址和咨询主题已检查，未实际发送邮件。

## 主要编辑位置

- `src/assets/styles.css`：全站主题与响应式布局。
- `src/components/ServicesSection.vue`：服务介绍和咨询入口。
- `src/components/ProjectsSection.vue`、`ExperienceSection.vue`：原站项目和经历内容。
- `src/components/ContactSection.vue`：真实邮箱和复制交互。
- `src/App.vue`：区块顺序；`index.html`：标题、描述和主题色。

## 参考图方向调整（2026-10-30）

- 首屏采用暖色桌面场景、左侧大标题和四类服务入口，背景是 AI 生成的装饰素材。
- 精选作品前置，桌面四列、手机两列；卡片展开显示原有项目职责。
- 项目缩略图由代码绘制并标注为内容示意，不代表实际产品截图；不使用参考图里的虚构项目或人物身份。
- 服务改为紧凑横向图标卡片，关于我改为横幅；保留详细案例、经历与联系区。
- 未加入客户评价、50+ 项目或 100% 等未经确认的数据。
- 通过类型检查与生产构建，检查桌面和 390px 手机布局、卡片展开及手机菜单；浏览器未记录错误或警告。

### 首屏素材

使用内置 image_gen 生成；原图保留在 Codex 生成目录，网站使用 JPEG 压缩版本 `public/images/studio-hero.jpg`（约 181 KB）。这是装饰性工作室场景，不是真实工作室或客户项目证明。

生成提示词：

> Use case: photorealistic-natural. Generate a premium website hero background, wide landscape 1536x1024 or wider. Warm cream minimalist independent web developer studio, sunlit ivory desk with an elegant open dark slim laptop angled gently toward camera on RIGHT HALF, phone upright beside it, white tulips in ceramic vase behind, a few ivory books and notebook, linen curtains, soft morning sunlight and shadows, muted caramel accents. LEFT 45% almost empty softly lit ivory wall/desk with minimal detail to overlay live website text. Laptop screen shows an abstract elegant cream website layout with flower photo and fine brown lines, phone screen corresponding layout. No readable text, no logos, no people. Photorealistic editorial interior product photography, sophisticated natural texture, not illustration, no watermark. This is a decorative studio scene, not a real project screenshot.
