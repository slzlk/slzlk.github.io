<script setup lang="ts">
import { processSteps as process } from "../config/site";
</script>

<template>
  <section id="process" class="section process">
    <div class="section-heading section-heading--row">
      <div>
        <p class="section-kicker">HOW WE WORK</p>
        <h2>把复杂工作，<br />变成清晰的推进路径。</h2>
      </div>
      <p>每一步明确范围，每个节点都能确认。</p>
    </div>
    <div class="process__grid">
      <article v-for="item in process" :key="item.index">
        <span>{{ item.index }}</span>
        <div class="process__icon" aria-hidden="true">
          {{ item.index === "04" ? "↗" : "→" }}
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>
