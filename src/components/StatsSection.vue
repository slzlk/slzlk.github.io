<script setup lang="ts">
const stats = [
  { value: '8', suffix: '年+', label: '前端研发经验' },
  { value: '20', suffix: '+', label: '参与项目' },
  { value: '5', suffix: '类', label: '终端覆盖' },
  { value: '4', suffix: '段', label: '工作经历' },
]
</script>

<template>
  <section class="section stats" aria-label="职业数据">
    <article v-for="item in stats" :key="item.label">
      <p><strong>{{ item.value }}</strong><span>{{ item.suffix }}</span></p>
      <small>{{ item.label }}</small>
    </article>
  </section>
</template>
