<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    index: '01',
    title: '美丽秘寻 AI 智能助手',
    description: '面向化妆品原料研发的微信小程序，完成从用户提问到模型流式回复的完整交互链路。',
    points: ['SSE 流式输出', 'Markdown / 引用 / 图片', '历史会话与反馈'],
    tags: ['Vue3', 'UniApp', 'SSE', 'Dify', 'Markdown'],
    accent: 'violet' as const,
  },
  {
    index: '02',
    title: '零距离租赁平台',
    description: '覆盖 App、小程序、H5、PC 与运营后台的综合租赁交易平台。',
    points: ['UniApp 多端交付', 'SSR 与 SEO', '商品 / 订单 / 商家业务'],
    tags: ['Vue3', 'UniApp', 'Freemarker', 'Element Plus'],
    accent: 'cyan' as const,
  },
  {
    index: '03',
    title: '徐农荟',
    description: '农产品供需、行情与交易平台，覆盖小程序、App 和 H5。',
    points: ['采购与供应', '拼车拼团', '订单与行情'],
    tags: ['UniApp', 'Vue', '跨端应用'],
    accent: 'lime' as const,
  },
  {
    index: '04',
    title: '数据可视化与业务平台',
    description: '参与中国菠萝、南山镇农业数据大屏，以及悟空校招、公会社区等项目。',
    points: ['ECharts 大屏', '权限与组件封装', '性能与适配优化'],
    tags: ['Vue', 'ECharts', 'Element Plus', 'H5'],
    accent: 'blue' as const,
  },
]
</script>

<template>
  <section id="projects" class="section projects">
    <div class="section-heading section-heading--row">
      <div>
        <p class="section-kicker"><span>04</span> MORE WORK</p>
        <h2>更多项目</h2>
      </div>
      <p>从 AI 对话到交易平台，<br />用稳定工程承载复杂业务。</p>
    </div>

    <div class="projects__grid">
      <ProjectCard v-for="project in projects" :key="project.index" v-bind="project" />
    </div>
  </section>
</template>
