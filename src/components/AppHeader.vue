<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const menuOpen = ref(false)
const activeSection = ref('top')
let observer: IntersectionObserver | undefined

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) activeSection.value = visible.target.id
    },
    { rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.5] },
  )
  document.querySelectorAll('main section[id]').forEach((section) => observer?.observe(section))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="header">
    <a class="brand" href="#top" aria-label="返回首页" @click="closeMenu">
      <span class="brand__mark">L</span>
      <span>SONG LI · PORTFOLIO</span>
    </a>

    <button
      class="menu-button"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="main-navigation"
      aria-label="切换导航菜单"
      @click="menuOpen = !menuOpen"
    >
      <span></span>
      <span></span>
    </button>

    <nav id="main-navigation" class="nav" :class="{ 'nav--open': menuOpen }" aria-label="主导航">
      <a href="#about" :class="{ 'is-active': activeSection === 'about' }" @click="closeMenu">关于</a>
      <a href="#experience" :class="{ 'is-active': activeSection === 'experience' }" @click="closeMenu">经历</a>
      <a href="#projects" :class="{ 'is-active': ['featured', 'projects'].includes(activeSection) }" @click="closeMenu">作品</a>
      <a href="#process" :class="{ 'is-active': activeSection === 'process' }" @click="closeMenu">方法</a>
      <a href="#stack" :class="{ 'is-active': activeSection === 'stack' }" @click="closeMenu">技术栈</a>
      <a class="nav__contact" href="#contact" @click="closeMenu">联系我 ↗</a>
    </nav>
  </header>
</template>
