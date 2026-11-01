<script setup lang="ts">
import ServiceIcon from './ServiceIcon.vue'
</script>

<template>
  <section id="top" class="hero section">
    <div class="hero__backdrop" aria-hidden="true"></div>
    <div class="hero__content">
      <div class="hero__copy">
        <p class="hero__eyebrow">INDEPENDENT DEVELOPER</p>
        <span class="hero__signature" aria-hidden="true">Lili ♡</span>
        <h1>你好，<br />我是丽丽。</h1>
        <h2>让每一个好想法，都有自己的网页。</h2>
        <p class="hero__intro">
          专注个人网站、创意 H5 与 AI 应用定制，<br />用设计和代码，把想法变成真实可用的作品。
        </p>
        <div class="hero__specialties" aria-label="定制方向">
          <a href="#services"
            ><span class="hero__service-icon"><ServiceIcon name="website" /></span><span>个人网站<br />定制开发</span></a
          >
          <a href="#services"
            ><span class="hero__service-icon"><ServiceIcon name="h5" /></span><span>H5 页面<br />创意交互</span></a
          >
          <a href="#services"
            ><span class="hero__service-icon"><ServiceIcon name="assistant" /></span><span>AI 智能体<br />网页接入</span></a
          >
          <a href="#services"
            ><span class="hero__service-icon"><ServiceIcon name="miniapp" /></span><span>小程序<br />定制开发</span></a
          >
        </div>
        <div class="hero__actions">
          <a class="button button--primary" href="#projects"
            >查看我的作品 <span aria-hidden="true">→</span></a
          ><a class="button button--ghost" href="#services">了解定制服务</a>
        </div>
      </div>
    </div>
    <span class="hero__image-note">STUDIO MOOD / 场景示意</span>
  </section>
</template>
