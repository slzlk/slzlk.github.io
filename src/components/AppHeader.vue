<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { siteConfig } from "../config/site";
const menuOpen = ref(false);
const activeSection = ref("top");
const links = [
  { id: "top", label: "首页" },
  ...(siteConfig.sections.demos ? [{ id: "demos", label: "页面演示" }] : []),
  ...(siteConfig.sections.projects
    ? [{ id: "projects", label: "项目案例" }]
    : []),
  ...(siteConfig.sections.services
    ? [{ id: "services", label: "定制服务" }]
    : []),
  ...(siteConfig.sections.about ? [{ id: "about", label: "关于我" }] : []),
];
let observer: IntersectionObserver | undefined;
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) activeSection.value = entry.target.id;
    },
    { rootMargin: "-20% 0px -65%" },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => observer?.observe(section));
});
onUnmounted(() => observer?.disconnect());
</script>
<template>
  <header class="header" @keydown.esc="menuOpen = false">
    <a class="brand" href="#top" aria-label="返回首页" @click="menuOpen = false"
      ><span class="brand__mark" aria-hidden="true">✦</span
      ><span class="brand__text"
        ><strong>{{ siteConfig.brand }}</strong
        ><small>{{ siteConfig.tagline }}</small></span
      ></a
    >
    <button
      class="menu-button"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="main-navigation"
      aria-label="切换导航菜单"
      @click="menuOpen = !menuOpen"
    >
      <span></span><span></span>
    </button>
    <nav
      id="main-navigation"
      class="nav"
      :class="{ 'nav--open': menuOpen }"
      aria-label="主导航"
    >
      <a
        v-for="link in links"
        :key="link.id"
        :href="`#${link.id}`"
        :class="{ 'is-active': activeSection === link.id }"
        :aria-current="activeSection === link.id ? 'location' : undefined"
        @click="menuOpen = false"
        >{{ link.label }}</a
      ><a class="nav__contact" href="#contact" @click="menuOpen = false"
        >立即咨询 →</a
      >
    </nav>
  </header>
</template>
