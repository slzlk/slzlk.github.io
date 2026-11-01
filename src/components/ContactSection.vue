<script setup lang="ts">
import { computed, ref } from "vue";
import { emailUrl, siteConfig } from "../config/site";
const copyStatus = ref("");
const formStatus = ref("");
const form = ref({
  name: "",
  service: "个人网站",
  budget: "",
  timeline: "",
  message: "",
});
const inquiry = computed(() =>
  emailUrl(
    `项目咨询：${form.value.service}`,
    `称呼：${form.value.name}\n项目方向：${form.value.service}\n预算范围：${form.value.budget || "待沟通"}\n期望时间：${form.value.timeline || "待沟通"}\n\n需求描述：\n${form.value.message}`,
  ),
);
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(siteConfig.email);
    copyStatus.value = "邮箱已复制";
  } catch {
    copyStatus.value = `请手动复制：${siteConfig.email}`;
  }
};
const prepareEmail = () => {
  formStatus.value =
    "已准备邮件内容。如未打开邮件应用，请复制需求后发送至下方邮箱。";
  window.location.href = inquiry.value;
};
const copyInquiry = async () => {
  const body =
    new URLSearchParams(inquiry.value.split("?")[1]).get("body") || "";
  try {
    await navigator.clipboard.writeText(body);
    formStatus.value = "需求已复制，可以粘贴到邮件中发送。";
  } catch {
    formStatus.value = "浏览器未允许复制，请手动复制已填写的内容。";
  }
};
</script>
<template>
  <section id="contact" class="section contact">
    <div class="inquiry-layout">
      <div class="inquiry-intro">
        <p class="section-kicker">LET’S MAKE IT REAL</p>
        <h2>下一个好想法，<br /><span>从一次交谈开始。</span></h2>
        <p>不必准备得面面俱到。先告诉我你想做什么，我们一起理清下一步。</p>
        <a class="inquiry-email" :href="emailUrl()">{{ siteConfig.email }}</a
        ><button class="copy-button" type="button" @click="copyEmail">
          复制邮箱 ↗
        </button>
        <p class="form-status" role="status">{{ copyStatus }}</p>
      </div>
      <form class="inquiry-form" @submit.prevent="prepareEmail">
        <div class="form-pair">
          <label
            >怎么称呼你<input
              v-model.trim="form.name"
              name="name"
              autocomplete="name"
              maxlength="60"
              required
              placeholder="你的称呼" /></label
          ><label
            >想做什么<select v-model="form.service" name="service">
              <option>个人网站</option>
              <option>H5 页面</option>
              <option>AI 智能体接入</option>
              <option>小程序定制</option>
              <option>其他需求</option>
            </select></label
          >
        </div>
        <div class="form-pair">
          <label
            >预算范围 <span>选填</span
            ><input
              v-model.trim="form.budget"
              name="budget"
              maxlength="80"
              placeholder="可以先聊聊" /></label
          ><label
            >期望时间 <span>选填</span
            ><input
              v-model.trim="form.timeline"
              name="timeline"
              maxlength="80"
              placeholder="例如：希望下个月上线"
          /></label>
        </div>
        <label
          >简单说说你的想法<textarea
            v-model.trim="form.message"
            name="message"
            rows="4"
            minlength="5"
            maxlength="2000"
            required
            placeholder="项目用途、想要的功能、喜欢的风格…"
          ></textarea>
        </label>
        <p class="form-note">
          内容只在当前页面填写，不自动上传或保存；点击后由你的邮件应用完成发送。
        </p>
        <div class="inquiry-actions">
          <button class="button button--primary" type="submit">
            生成咨询邮件 →</button
          ><button class="button" type="button" @click="copyInquiry">
            复制需求
          </button>
        </div>
        <p class="form-status" role="status">{{ formStatus }}</p>
      </form>
    </div>
    <footer class="footer">
      <p>
        © {{ new Date().getFullYear() }} {{ siteConfig.name }} ·
        {{ siteConfig.tagline }}
      </p>
      <nav aria-label="页脚导航">
        <a :href="emailUrl()">Email ↗</a><a href="#top">回到顶部 ↑</a>
      </nav>
    </footer>
  </section>
</template>
