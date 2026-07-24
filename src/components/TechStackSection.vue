<script setup lang="ts">
const stack = [
  'Vue3',
  'TypeScript',
  'JavaScript',
  'UniApp',
  '微信小程序',
  'Vite',
  'Docker',
  'Nginx',
  'AI Agent',
]
</script>

<template>
  <section id="stack" class="section stack">
    <div class="section-heading">
      <p class="section-kicker"><span>03</span> TOOLKIT</p>
      <h2>构建产品的<br />技术与工具。</h2>
    </div>

    <div class="stack__list">
      <span v-for="(item, index) in stack" :key="item">
        <i>{{ String(index + 1).padStart(2, '0') }}</i>
        {{ item }}
      </span>
    </div>
  </section>
</template>
