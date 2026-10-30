<script setup lang="ts">
const services = [
  {
    number: "01",
    icon: "↗",
    title: "个人网站",
    subtitle: "A space of your own",
    text: "个人主页、作品集与品牌展示，让你的风格被看见。",
    tags: "响应式布局 / 内容展示 / SEO",
  },
  {
    number: "02",
    icon: "✳",
    title: "H5 定制",
    subtitle: "Small pages, big ideas",
    text: "活动专题、产品介绍与移动页面，让内容轻巧抵达用户。",
    tags: "移动适配 / 交互开发 / 页面优化",
  },
  {
    number: "03",
    icon: "✧",
    title: "AI 智能体接入",
    subtitle: "Intelligence, made useful",
    text: "把智能助手融入网站与业务，让对话成为自然的产品体验。",
    tags: "Dify 接入 / 流式对话 / 内容渲染",
  },
  {
    number: "04",
    icon: "▦",
    title: "小程序定制",
    subtitle: "Closer to your users",
    text: "围绕实际业务场景，开发清晰、顺手的微信小程序。",
    tags: "UniApp / 业务交互 / 多端适配",
  },
];
</script>
<template>
  <section id="services" class="section services">
    <div class="section-heading section-heading--row">
      <div>
        <p class="section-kicker"><span>01</span> WHAT I CAN DO</p>
        <h2>你的想法，<br />值得被认真实现。</h2>
      </div>
      <p>从一张个人主页，到一个业务应用。<br />一起找到适合你的实现方式。</p>
    </div>
    <div class="services__grid">
      <a
        v-for="service in services"
        :key="service.number"
        class="service-card"
        :href="`mailto:2516359362@qq.com?subject=${encodeURIComponent(`咨询：${service.title}`)}`"
      >
        <div class="service-card__top">
          <span>{{ service.number }}</span
          ><span aria-hidden="true">↗</span>
        </div>
        <span class="service-card__icon" aria-hidden="true">{{
          service.icon
        }}</span>
        <h3>{{ service.title }}</h3>
        <i>{{ service.subtitle }}</i>
        <p>{{ service.text }}</p>
        <small>{{ service.tags }}</small>
      </a>
    </div>
    <p class="services__note">
      按需求沟通范围、排期与报价，确认后再开始。<a href="#contact"
        >聊聊你的想法 ↗</a
      >
    </p>
  </section>
</template>
