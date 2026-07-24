<script setup lang="ts">
const experiences = [
  {
    period: '2025.06 — 至今',
    company: '某科技公司',
    role: '前端开发工程师',
    summary: '负责 AI 智能助手核心前端研发，落地流式对话、多类型内容渲染与完整会话交互。',
  },
  {
    period: '2024.02 — 2025.05',
    company: '广东省小股科技有限公司',
    role: '前端开发工程师',
    summary: '负责零距离租赁平台多端业务、PC 端 SSR 与运营管理后台研发。',
  },
  {
    period: '2019.09 — 2023.12',
    company: '广州诺尔信息科技有限公司',
    role: '前端开发工程师',
    summary: '参与交易平台、数据可视化、社区与招聘业务，承担技术选型、组件封装与性能优化。',
  },
  {
    period: '2017.07 — 2019.07',
    company: '广州金向标科技有限公司',
    role: '前端开发工程师',
    summary: '负责官网、公众号、活动页与中后台系统等前端研发。',
  },
]
</script>

<template>
  <section id="experience" class="section experience">
    <div class="section-heading">
      <div>
        <p class="section-kicker"><span>02</span> EXPERIENCE</p>
        <h2>在真实业务里，<br />持续积累判断力。</h2>
      </div>
      <p class="experience__intro">8 年 · 4 段经历 · 多端产品研发</p>
    </div>
    <div class="experience__list">
      <article v-for="item in experiences" :key="item.period">
        <time>{{ item.period }}</time>
        <div>
          <h3>{{ item.company }}</h3>
          <p>{{ item.role }}</p>
        </div>
        <p>{{ item.summary }}</p>
      </article>
    </div>
  </section>
</template>
