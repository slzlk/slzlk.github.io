<script setup lang="ts">
const stack = [
  'Vue3',
  'TypeScript',
  'JavaScript',
  'UniApp',
  '微信小程序',
  'Vite',
  'Pinia / Vuex',
  'SSE / Markdown',
  'SSR / SEO',
  'ECharts',
]
</script>

<template>
  <section id="stack" class="section stack">
    <div class="section-heading">
      <p class="section-kicker"><span>06</span> TOOLKIT</p>
      <h2>熟悉技术，<br />也理解技术之外的取舍。</h2>
    </div>

    <div class="stack__list">
      <span v-for="(item, index) in stack" :key="item">
        <i>{{ String(index + 1).padStart(2, '0') }}</i>
        {{ item }}
      </span>
    </div>
  </section>
</template>
