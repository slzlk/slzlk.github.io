<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

import { projects } from "../config/site";
</script>

<template>
  <section id="projects" class="section projects">
    <div class="section-heading section-heading--row">
      <div>
        <p class="section-kicker">FEATURED WORKS</p>
        <h2>精选作品</h2>
      </div>
      <p>不同的想法，相同的用心。<br />参与项目选摘，名称已作匿名处理。</p>
    </div>

    <div class="projects__grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.index"
        v-bind="project"
      />
    </div>
  </section>
</template>
