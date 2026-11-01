<script setup lang="ts">
import ServiceIcon from "./ServiceIcon.vue";
import { services, emailUrl } from "../config/site";
</script>
<template>
  <section id="services" class="section services">
    <div class="section-heading section-heading--row">
      <div>
        <p class="section-kicker">SERVICES</p>
        <h2>定制服务</h2>
      </div>
      <p>从想法到落地，提供更贴合你需求的解决方案。</p>
    </div>
    <div class="services__grid">
      <article
        v-for="service in services"
        :key="service.icon"
        class="service-card"
      >
        <div class="service-card__top">
          <span>{{ service.icon }}</span
          ><span aria-hidden="true">↗</span>
        </div>
        <span class="service-card__icon"
          ><ServiceIcon :name="service.icon"
        /></span>
        <h3>{{ service.title }}</h3>
        <i>{{ service.subtitle }}</i>
        <p>{{ service.text }}</p>
        <details class="service-details">
          <summary>交付内容与范围 <span aria-hidden="true">＋</span></summary>
          <ul>
            <li v-for="item in service.deliverables" :key="item">{{ item }}</li>
          </ul>
          <p><b>需要准备</b><br />{{ service.prepare }}</p>
          <p>{{ service.boundary }}</p>
          <a class="text-link" :href="emailUrl(`咨询：${service.title}`)"
            >咨询这项服务 →</a
          >
        </details>
      </article>
    </div>
    <p class="services__note">
      按需求沟通范围、排期与报价，确认后再开始。<a href="#contact"
        >聊聊你的想法 ↗</a
      >
    </p>
  </section>
</template>
