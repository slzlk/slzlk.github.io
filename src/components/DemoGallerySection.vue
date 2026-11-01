<script setup lang="ts">
import { assetUrl, siteConfig } from "../config/site";
</script>
<template>
  <section id="demos" class="section demos">
    <div class="section-heading section-heading--row">
      <div>
        <p class="section-kicker">EXPLORE THE EXPERIENCE</p>
        <h2>先体验，再想象你的版本。</h2>
      </div>
      <p>两个可以实际操作的前端演示。<br />演示内容独立于下方的项目经历。</p>
    </div>
    <div class="demo-gallery">
      <a class="demo-preview demo-preview--portfolio" href="?demo=portfolio"
        ><div
          class="demo-preview__art"
          :style="{
            backgroundImage: `url(${assetUrl(siteConfig.hero.image)})`,
          }"
        >
          <div class="demo-preview__sheet">
            <small>SHIGUANG / STUDIO</small
            ><strong>把日常的灵感，<br />做成自己的表达。</strong
            ><span>个人品牌 · 作品展示</span>
          </div>
        </div>
        <div class="demo-preview__caption">
          <div>
            <small>01 / BRAND & PORTFOLIO</small>
            <h3>个人品牌展示站</h3>
            <p>分类作品、服务展示与演示咨询表单。</p>
          </div>
          <span class="demo-preview__arrow" aria-hidden="true">↗</span>
        </div>
        <span class="demo-preview__action">打开完整演示 →</span></a
      >
      <a class="demo-preview demo-preview--assistant" href="?demo=assistant"
        ><div class="demo-preview__art">
          <div class="demo-preview__chat">
            <span>✧ 灵感助手</span
            ><strong>从一个问题，<br />开始下一次创造。</strong>
            <div>我想做一个个人网站，如何开始？</div>
            <p>可以从定位、内容和使用场景开始梳理…</p>
            <small>输入 · 生成 · 停止 · 重新开始</small>
          </div>
        </div>
        <div class="demo-preview__caption">
          <div>
            <small>02 / CONVERSATIONAL UI</small>
            <h3>AI 助手交互界面</h3>
            <p>本地模拟逐字输出，不连接真实模型。</p>
          </div>
          <span class="demo-preview__arrow" aria-hidden="true">↗</span>
        </div>
        <span class="demo-preview__action">打开完整演示 →</span></a
      >
    </div>
  </section>
</template>
