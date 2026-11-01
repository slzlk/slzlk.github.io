<script setup lang="ts">
import { siteConfig, assetUrl } from "../config/site";
</script>
<template>
  <section
    id="about"
    class="section about"
    :style="{ '--hero-image': `url(${assetUrl(siteConfig.hero.image)})` }"
  >
    <div class="section-heading">
      <p class="section-kicker">A LITTLE ABOUT ME</p>
      <h2>{{ siteConfig.about.heading }}</h2>
    </div>
    <div class="about__content">
      <p class="about__lead">{{ siteConfig.about.lead }}</p>
      <p class="about__detail">{{ siteConfig.about.description }}</p>
      <a class="about__more button" href="#contact">聊聊你的想法 →</a>
      <div class="about__focus" aria-label="合作理念">
        <span v-for="value in siteConfig.about.values" :key="value">{{
          value
        }}</span>
      </div>
    </div>
  </section>
</template>
