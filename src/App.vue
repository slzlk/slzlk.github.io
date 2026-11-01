<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { siteConfig } from "./config/site";
import AboutSection from "./components/AboutSection.vue";
import AppHeader from "./components/AppHeader.vue";
import ContactSection from "./components/ContactSection.vue";
import HeroSection from "./components/HeroSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import FaqSection from "./components/FaqSection.vue";
import DemoGallerySection from "./components/DemoGallerySection.vue";
import DemoApp from "./components/DemoApp.vue";
const requestedDemo = new URLSearchParams(window.location.search).get("demo");
const demo =
  requestedDemo === "portfolio" || requestedDemo === "assistant"
    ? requestedDemo
    : null;
const scrollProgress = ref(0);
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value =
    scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
};
onMounted(() => {
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
  if (demo)
    document.title = `${demo === "portfolio" ? "个人品牌网站" : "AI 助手界面"}演示 · ${siteConfig.name}`;
});
onUnmounted(() => window.removeEventListener("scroll", updateProgress));
</script>
<template>
  <DemoApp v-if="demo" :mode="demo" />
  <div v-else class="site-shell">
    <a class="skip-link" href="#main-content">跳到主要内容</a>
    <div
      class="scroll-progress"
      :style="{ width: `${scrollProgress}%` }"
      aria-hidden="true"
    ></div>
    <AppHeader />
    <main id="main-content">
      <HeroSection /><DemoGallerySection
        v-if="siteConfig.sections.demos"
      /><ProjectsSection v-if="siteConfig.sections.projects" /><ServicesSection
        v-if="siteConfig.sections.services"
      /><AboutSection v-if="siteConfig.sections.about" /><ProcessSection
        v-if="siteConfig.sections.process"
      /><FaqSection v-if="siteConfig.sections.faq" /><ContactSection />
    </main>
  </div>
</template>
