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
