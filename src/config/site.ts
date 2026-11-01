export type IconName = "website" | "h5" | "assistant" | "miniapp";
export interface Project {
  index: string;
  title: string;
  description: string;
  points: string[];
  tags: string[];
  accent: "violet" | "cyan" | "lime" | "blue";
  context: string;
  approach: string;
}
export const siteConfig = {
  name: "丽丽",
  brand: "丽丽 · STUDIO",
  signature: "Lili ♡",
  tagline: "Web · Design · AI",
  email: "2516359362@qq.com",
  title: "丽丽 · 网站定制与 AI 应用开发",
  description:
    "个人网站、创意 H5、AI 智能体接入与小程序定制。查看作品、体验演示，沟通你的下一步想法。",
  hero: {
    eyebrow: "INDEPENDENT DEVELOPER",
    greeting: "你好，",
    heading: "我是丽丽。",
    subtitle: "让每一个好想法，都有自己的网页。",
    description: "专注个人网站、创意 H5 与 AI 应用定制，",
    continuation: "用设计和代码，把想法变成真实可用的作品。",
    image: "images/studio-hero.jpg",
  },
  about: {
    heading: "关于我",
    lead: "一名关注设计体验与产品落地的独立开发者。",
    description:
      "从个人展示到业务应用，我希望把复杂需求梳理清楚，再用细腻的界面和可靠的代码实现。重视沟通、使用体验和后续维护，让每一次合作都有清晰的推进方向。",
    values: ["认真理解需求", "关注细节体验", "交付清晰可维护"],
  },
  // 关闭不需要的区块；导航会同步调整。
  sections: {
    demos: true,
    projects: true,
    services: true,
    about: true,
    process: true,
    faq: true,
  },
  theme: {
    accent: "#b98269",
    ink: "#36231b",
    muted: "#7c7874",
    background: "#fffdfa",
  },
};
export const services: {
  icon: IconName;
  title: string;
  shortTitle: string;
  subtitle: string;
  text: string;
  deliverables: string[];
  prepare: string;
  boundary: string;
}[] = [
  {
    icon: "website",
    title: "个人网站定制",
    shortTitle: "个人网站",
    subtitle: "定制开发",
    text: "个人主页、作品集与品牌展示，让你的风格被看见。",
    deliverables: [
      "响应式展示页面",
      "作品与服务内容配置",
      "基础 SEO 与部署说明",
    ],
    prepare: "品牌名称、文字内容、图片素材与参考风格。",
    boundary: "页面数量、后台管理与内容录入范围，在开始前确认。",
  },
  {
    icon: "h5",
    title: "H5 页面开发",
    shortTitle: "H5 页面",
    subtitle: "创意交互",
    text: "活动专题、产品介绍与移动页面，让内容轻巧抵达用户。",
    deliverables: ["移动端页面与交互", "主流屏幕适配", "页面源码与上线指引"],
    prepare: "活动内容、页面设计或参考、目标发布平台。",
    boundary: "支付、分享、登录与数据接口，按实际平台另行确认。",
  },
  {
    icon: "assistant",
    title: "AI 智能体接入",
    shortTitle: "AI 智能体",
    subtitle: "网页接入",
    text: "把智能助手融入网站与业务，让对话成为自然的产品体验。",
    deliverables: [
      "对话界面与消息状态",
      "约定接口的接入与联调",
      "部署与使用说明",
    ],
    prepare: "应用场景、可用的服务端接口与内容展示要求。",
    boundary: "模型费用、知识库建设及后端部署不默认包含，密钥仅保存在服务端。",
  },
  {
    icon: "miniapp",
    title: "小程序定制",
    shortTitle: "小程序",
    subtitle: "定制开发",
    text: "围绕实际业务场景，开发清晰、顺手的微信小程序。",
    deliverables: [
      "约定页面与业务交互",
      "接口联调与设备适配",
      "项目源码与提交指引",
    ],
    prepare: "小程序主体、功能清单、设计素材与业务接口。",
    boundary: "认证、审核结果、第三方费用与后端范围，在需求阶段明确。",
  },
];
export const projects: Project[] = [
  {
    index: "01",
    title: "AI 智能助手",
    description: "面向原料研发场景的微信小程序，覆盖提问、流式回复与历史会话。",
    points: ["SSE 流式输出", "Markdown / 引用 / 图片", "历史会话与反馈"],
    tags: ["Vue3", "UniApp", "SSE", "Dify", "Markdown"],
    accent: "violet",
    context: "在小程序中承接模型的流式回答，并保持长内容阅读与追问体验。",
    approach:
      "参与核心前端链路，处理消息状态、富文本渲染、滚动、重新生成与反馈交互。",
  },
  {
    index: "02",
    title: "多端租赁平台",
    description: "覆盖 App、小程序、H5、PC 与运营后台的综合租赁交易平台。",
    points: ["UniApp 多端交付", "SSR 与 SEO", "商品 / 订单 / 商家业务"],
    tags: ["Vue3", "UniApp", "Freemarker", "Element Plus"],
    accent: "cyan",
    context: "同一业务面向不同终端，需要协调商品、订单和商家等模块的使用流程。",
    approach:
      "参与跨端业务、PC 端 SSR 与运营管理后台开发，围绕不同屏幕组织页面与交互。",
  },
  {
    index: "03",
    title: "农产品供需平台",
    description: "农产品供需、行情与交易平台，覆盖小程序、App 和 H5。",
    points: ["采购与供应", "拼车拼团", "订单与行情"],
    tags: ["UniApp", "Vue", "跨端应用"],
    accent: "lime",
    context: "围绕农产品供需连接，提供采购、供应、行情与订单等业务入口。",
    approach:
      "参与多端业务页面开发，将供需、拼团和订单等流程组织为清晰的使用路径。",
  },
  {
    index: "04",
    title: "数据可视化与业务平台",
    description: "农业数据大屏、招聘与社区等业务平台的前端开发。",
    points: ["ECharts 大屏", "权限与组件封装", "性能与适配优化"],
    tags: ["Vue", "ECharts", "Element Plus"],
    accent: "blue",
    context: "在不同业务中展示信息、呈现数据，并兼顾权限和组件复用。",
    approach:
      "参与技术选型、组件封装、数据展示和适配优化，支持复杂信息的清晰呈现。",
  },
];
export const processSteps = [
  {
    index: "01",
    title: "沟通需求",
    text: "一起确认项目用途、用户、功能清单、素材与时间预期。",
  },
  {
    index: "02",
    title: "确认方案",
    text: "明确页面、交付范围、排期、报价与修改边界，再开始制作。",
  },
  {
    index: "03",
    title: "制作与确认",
    text: "按约定节点提供可预览版本，集中确认内容、交互与适配。",
  },
  {
    index: "04",
    title: "验收与交付",
    text: "按清单验收，交付约定源码、配置说明与部署指引。",
  },
];
export const faqs = [
  {
    question: "开始前需要准备什么？",
    answer:
      "建议先提供项目用途、功能清单、喜欢的参考风格、文字和图片素材，以及期望时间。内容暂不完整时，也可以先沟通范围。",
  },
  {
    question: "可以只调整模板，也可以完整定制吗？",
    answer:
      "可以讨论两种方式。模板调整适合已有明确结构的展示站；结构、交互和业务流程差异较大时，先拆解需求，再确定定制范围。",
  },
  {
    question: "费用与时间怎么确定？",
    answer:
      "根据页面数量、交互复杂度、接口情况、素材准备和交付内容确认。沟通后提供具体方案，不在信息不足时承诺统一工期。",
  },
  {
    question: "上线后可以自己修改内容吗？",
    answer:
      "交付时会提供约定范围内的内容修改说明。如果需要在线后台编辑、持续维护或定期更新，可以在方案阶段一并确认。",
  },
  {
    question: "演示中的 AI 对话连接了真实模型吗？",
    answer:
      "本站演示使用本地预设内容，用于体验界面、生成状态和停止交互，不连接真实模型，也不上传输入。正式接入需要服务端接口，模型与第三方费用另行确认。",
  },
];
export function assetUrl(path: string) {
  return new URL(path.replace(/^\//, ""), new URL(import.meta.env.BASE_URL, document.baseURI)).href;
}
export function emailUrl(subject = "定制开发咨询", body = "") {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
