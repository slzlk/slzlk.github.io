<script setup lang="ts">
import { ref } from "vue";
const copyStatus = ref("");
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("2516359362@qq.com");
    copyStatus.value = "邮箱已复制";
  } catch {
    copyStatus.value = "请手动复制邮箱：2516359362@qq.com";
  }
};
</script>
<template>
  <section id="contact" class="section contact">
    <p class="section-kicker"><span>07</span> CONTACT</p>
    <div class="contact__content">
      <div>
        <h2>下一个好想法，<br /><span>从一次交谈开始。</span></h2>
        <p>欢迎咨询个人网站、H5、AI 智能体接入与小程序定制。</p>
        <p>邮件里可以告诉我：项目用途、需要的功能、期望时间与预算范围。</p>
      </div>
      <a
        class="contact__cta"
        href="mailto:2516359362@qq.com"
        aria-label="发送邮件联系丽丽"
      >
        <span>聊聊需求</span>
        <i aria-hidden="true">↗</i>
      </a>
    </div>

    <div class="contact__email">
      <a href="mailto:2516359362@qq.com">2516359362@qq.com</a
      ><button type="button" @click="copyEmail">复制邮箱 ↗</button
      ><span role="status">{{ copyStatus }}</span>
    </div>
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} 丽丽 · BUILT WITH VUE</p>
      <nav aria-label="联系链接">
        <a href="https://github.com/slzlk" target="_blank" rel="noreferrer"
          >GitHub ↗</a
        >
        <a href="mailto:2516359362@qq.com">Email ↗</a>
        <a href="https://slzlk.github.io">个人主页 ↗</a>
      </nav>
    </footer>
  </section>
</template>
