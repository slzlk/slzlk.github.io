<script setup lang="ts">
import { faqs } from "../config/site";
</script>
<template>
  <section id="faq" class="section faq">
    <div class="section-heading">
      <p class="section-kicker">BEFORE WE BEGIN</p>
      <h2>你可能还想了解</h2>
      <p>先把问题聊清楚，再一起开始。</p>
    </div>
    <div class="faq__list">
      <details v-for="item in faqs" :key="item.question">
        <summary>{{ item.question }}<span aria-hidden="true">＋</span></summary>
        <p>{{ item.answer }}</p>
      </details>
    </div>
  </section>
</template>
