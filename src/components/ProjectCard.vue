<script setup lang="ts">
defineProps<{
  index: string
  title: string
  description: string
  tags: string[]
  accent: 'violet' | 'cyan' | 'lime' | 'blue'
  points?: string[]
}>()
</script>

<template>
  <article class="project-card" :class="`project-card--${accent}`">
    <div class="project-card__top">
      <span class="project-card__index">{{ index }}</span>
      <span class="project-card__arrow" aria-hidden="true">↗</span>
    </div>
    <div class="project-card__visual" aria-hidden="true">
      <div class="project-card__window">
        <span></span><span></span><span></span>
      </div>
      <div class="project-card__signal">
        <i v-for="item in 5" :key="item"></i>
      </div>
    </div>
    <div class="project-card__body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <ul v-if="points" class="project-card__points">
        <li v-for="point in points" :key="point">{{ point }}</li>
      </ul>
      <div class="project-card__tags">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>
