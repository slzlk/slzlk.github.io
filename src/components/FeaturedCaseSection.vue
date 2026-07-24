<script setup lang="ts">
import { computed, ref } from 'vue'

const active = ref<'experience' | 'technology' | 'result'>('experience')
const panels = {
  experience: {
    label: '产品体验',
    title: '让回答像对话一样自然',
    text: '处理长文本滚动、键盘交互、重新生成、历史会话与反馈链路。',
    items: ['流式输出不中断阅读', '引用与图片统一渲染', '异常状态清晰可恢复'],
  },
  technology: {
    label: '技术实现',
    title: '稳定承接模型流式数据',
    text: '围绕 SSE 数据解析、消息状态管理和 Markdown 渲染搭建核心链路。',
    items: ['SSE 分片解析', '消息状态机', 'Markdown 内容安全展示'],
  },
  result: {
    label: '交付结果',
    title: '完成可持续迭代的助手体验',
    text: '覆盖提问、生成、追问、历史记录与用户反馈等完整使用流程。',
    items: ['完整会话闭环', '多类型内容支持', '微信小程序体验优化'],
  },
}
const panel = computed(() => panels[active.value])
const selectPanel = (key: string | number) => {
  if (key === 'experience' || key === 'technology' || key === 'result') active.value = key
}
</script>

<template>
  <section id="featured" class="section featured">
    <div class="featured__heading">
      <p class="section-kicker"><span>03</span> FEATURED CASE</p>
      <p class="featured__label">AI APPLICATION · 2025</p>
      <h2>让大模型的回答，<br />成为自然流畅的产品体验。</h2>
      <p>
        美丽秘寻是一款面向化妆品原料研发领域的 AI 智能助手。
        我负责核心前端链路，把流式数据、复杂内容和小程序限制，
        转化为用户可以轻松理解的对话体验。
      </p>
      <div class="case-tabs" role="tablist" aria-label="项目案例维度">
        <button
          v-for="(item, key) in panels"
          :key="key"
          type="button"
          role="tab"
          :aria-selected="active === key"
          :class="{ 'is-active': active === key }"
          @click="selectPanel(key)"
        >
          {{ item.label }}
        </button>
      </div>
      <div class="case-panel" aria-live="polite">
        <strong>{{ panel.title }}</strong>
        <p>{{ panel.text }}</p>
        <ul>
          <li v-for="item in panel.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="featured__demo" aria-label="AI 智能助手界面示意">
      <div class="phone">
        <div class="phone__bar">
          <span>美丽秘寻</span>
          <i>•••</i>
        </div>
        <div class="phone__body">
          <div class="chat chat--user">帮我分析这款原料的应用特点</div>
          <div class="chat chat--ai">
            <div class="chat__avatar">AI</div>
            <div>
              <strong>原料分析</strong>
              <p>正在结合成分特性与应用场景，为你生成专业建议。</p>
              <ul><li>核心功效与作用机理</li><li>适用配方方向</li><li>使用注意事项</li></ul>
            </div>
          </div>
          <div class="typing"><i></i><i></i><i></i><span>内容生成中</span></div>
        </div>
        <div class="phone__input">继续追问… <span>↑</span></div>
      </div>
      <aside class="featured__note featured__note--one"><span>STREAM</span><strong>逐字输出</strong></aside>
      <aside class="featured__note featured__note--two"><span>CONTENT</span><strong>多类型渲染</strong></aside>
    </div>
  </section>
</template>
