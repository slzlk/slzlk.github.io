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
import StatsSection from './components/StatsSection.vue'
import TechStackSection from './components/TechStackSection.vue'

const scrollProgress = ref(0)
let observer: IntersectionObserver | undefined

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
}

onMounted(() => {
  const sections = document.querySelectorAll('main > section')
  sections.forEach((section) => section.classList.add('section-enter'))

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-enter--visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08 },
  )

  sections.forEach((section) => observer?.observe(section))
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div class="site-shell">
    <div class="scroll-progress" :style="{ width: `${scrollProgress}%` }" aria-hidden="true"></div>
    <div class="ambient ambient--one" aria-hidden="true"></div>
    <div class="ambient ambient--two" aria-hidden="true"></div>
    <AppHeader />
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ExperienceSection />
      <FeaturedCaseSection />
      <ProjectsSection />
      <ProcessSection />
      <TechStackSection />
      <ContactSection />
    </main>
  </div>
</template>
