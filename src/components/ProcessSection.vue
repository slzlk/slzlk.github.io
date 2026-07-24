<script setup lang="ts">
const process = [
  { index: '01', title: '理解问题', text: '参与需求评审，先确认业务目标、用户场景和交付边界。' },
  { index: '02', title: '设计方案', text: '拆解技术难点，平衡开发效率、可维护性与多端体验。' },
  { index: '03', title: '工程实现', text: '通过组件化、状态管理与性能优化，稳定推进开发交付。' },
  { index: '04', title: '上线迭代', text: '关注真实反馈、异常定位与持续优化，让产品稳定生长。' },
]
</script>

<template>
  <section id="process" class="section process">
    <div class="section-heading section-heading--row">
      <div>
        <p class="section-kicker"><span>05</span> HOW I WORK</p>
        <h2>把复杂工作，<br />变成清晰的推进路径。</h2>
      </div>
      <p>从需求到上线，完整参与每一个关键环节。</p>
    </div>
    <div class="process__grid">
      <article v-for="item in process" :key="item.index">
        <span>{{ item.index }}</span>
        <div class="process__icon" aria-hidden="true">{{ item.index === '04' ? '↗' : '→' }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>
