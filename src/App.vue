<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import AppHeader from './components/AppHeader.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import FeaturedCaseSection from './components/FeaturedCaseSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TechStackSection from './components/TechStackSection.vue'

const scrollProgress = ref(0)

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div class="site-shell">
    <div class="scroll-progress" :style="{ width: `${scrollProgress}%` }" aria-hidden="true"></div>
    <AppHeader />
    <main>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <FeaturedCaseSection />
      <ExperienceSection />
      <ProcessSection />
      <TechStackSection />
      <ContactSection />
    </main>
  </div>
</template>
