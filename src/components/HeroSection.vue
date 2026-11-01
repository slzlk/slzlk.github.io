<script setup lang="ts">
import { siteConfig, services, assetUrl } from "../config/site";
import ServiceIcon from "./ServiceIcon.vue";
</script>

<template>
  <section id="top" class="hero section">
    <div
      class="hero__backdrop"
      :style="{ '--hero-image': `url(${assetUrl(siteConfig.hero.image)})` }"
      aria-hidden="true"
    ></div>
    <div class="hero__content">
      <div class="hero__copy">
        <p class="hero__eyebrow">{{ siteConfig.hero.eyebrow }}</p>
        <span class="hero__signature" aria-hidden="true">{{
          siteConfig.signature
        }}</span>
        <h1>
          {{ siteConfig.hero.greeting }}<br />{{ siteConfig.hero.heading }}
        </h1>
        <h2>{{ siteConfig.hero.subtitle }}</h2>
        <p class="hero__intro">
          {{ siteConfig.hero.description }}<br />{{
            siteConfig.hero.continuation
          }}
        </p>
        <div
          v-if="siteConfig.sections.services"
          class="hero__specialties"
          aria-label="定制方向"
        >
          <a v-for="service in services" :key="service.icon" href="#services"
            ><span class="hero__service-icon"
              ><ServiceIcon :name="service.icon" /></span
            ><span
              >{{ service.shortTitle }}<br />{{ service.subtitle }}</span
            ></a
          >
        </div>
        <div class="hero__actions">
          <a
            class="button button--primary"
            :href="siteConfig.sections.demos ? '#demos' : '#contact'"
            >体验页面演示 <span aria-hidden="true">→</span></a
          ><a
            class="button button--ghost"
            :href="siteConfig.sections.services ? '#services' : '#contact'"
            >了解定制服务</a
          >
        </div>
      </div>
    </div>
    <span class="hero__image-note">STUDIO MOOD / 场景示意</span>
  </section>
</template>
