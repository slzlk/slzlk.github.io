<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    index: '01',
    title: 'AI 智能助手',
    description: '企业智能问答应用实践，支持流式对话、历史会话与 Markdown 解析。',
    tags: ['Vue3', 'UniApp', 'SSE', 'Dify', 'Markdown'],
    accent: 'violet' as const,
  },
  {
    index: '02',
    title: '文件分享系统',
    description: '个人效率工具，实现文件上传、生成访问链接与文件管理。',
    tags: ['Vue3', 'Node.js', 'Docker', 'Nginx'],
    accent: 'cyan' as const,
  },
  {
    index: '03',
    title: 'AI 开发工作流',
    description: '探索 AI 辅助软件开发流程，让想法更快、更可靠地走向上线。',
    points: ['需求分析', '代码生成', 'Bug 分析', '测试优化', '部署上线'],
    tags: ['AI Agent', 'Workflow', 'Automation'],
    accent: 'lime' as const,
  },
  {
    index: '04',
    title: '微信小程序项目',
    description: '面向真实业务场景的移动端应用开发实践。',
    tags: ['UniApp', '微信小程序', 'TypeScript'],
    accent: 'blue' as const,
  },
]
</script>

<template>
  <section id="projects" class="section projects">
    <div class="section-heading section-heading--row">
      <div>
        <p class="section-kicker"><span>02</span> SELECTED WORK</p>
        <h2>项目作品</h2>
      </div>
      <p>从产品思考到工程落地，<br />记录持续发生的创造。</p>
    </div>

    <div class="projects__grid">
      <ProjectCard v-for="project in projects" :key="project.index" v-bind="project" />
    </div>
  </section>
</template>
