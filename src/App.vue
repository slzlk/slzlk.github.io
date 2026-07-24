<script setup lang="ts">
import AboutSection from './components/AboutSection.vue'
import AppHeader from './components/AppHeader.vue'
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechStackSection from './components/TechStackSection.vue'
</script>

<template>
  <div class="site-shell">
    <div class="ambient ambient--one" aria-hidden="true"></div>
    <div class="ambient ambient--two" aria-hidden="true"></div>
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  </div>
</template>
