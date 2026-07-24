<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <a class="brand" href="#top" aria-label="返回首页" @click="closeMenu">
      <span class="brand__mark">L</span>
      <span>丽丽</span>
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
      <a href="#about" @click="closeMenu">关于</a>
      <a href="#projects" @click="closeMenu">作品</a>
      <a href="#stack" @click="closeMenu">技术栈</a>
      <a class="nav__contact" href="#contact" @click="closeMenu">联系我</a>
    </nav>
  </header>
</template>
