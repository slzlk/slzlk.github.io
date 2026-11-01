<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import { assetUrl, siteConfig } from "../config/site";
defineProps<{ mode: "portfolio" | "assistant" }>();
const home = import.meta.env.BASE_URL;
const category = ref("全部");
const samples = [
  {
    title: "日常里的小灵感",
    type: "品牌设计",
    number: "01",
    description: "以柔和配色与清晰排版呈现品牌的日常表达。",
  },
  {
    title: "给生活一点留白",
    type: "网站设计",
    number: "02",
    description: "围绕个人内容组织信息，兼顾桌面与手机阅读。",
  },
  {
    title: "慢慢发生的美好",
    type: "品牌设计",
    number: "03",
    description: "从内容与使用场景出发，整理一致的视觉语言。",
  },
];
const visibleSamples = computed(() =>
  samples.filter(
    (item) => category.value === "全部" || item.type === category.value,
  ),
);
const demoSubmitted = ref(false);
const input = ref("");
const messages = ref<{ role: "user" | "assistant"; text: string }[]>([]);
const generating = ref(false);
const status = ref("");
let timer: ReturnType<typeof setInterval> | undefined;
const suggestions = [
  "我想做一个个人网站，如何开始？",
  "帮我整理网站需要准备的内容",
  "怎样让咨询入口更清晰？",
];
const replyFor = (question: string) =>
  question.includes("内容")
    ? "可以先准备这几类内容：\n\n1. 一句话介绍：你是谁、主要提供什么服务。\n2. 作品素材：项目名称、图片、你的职责与公开展示范围。\n3. 服务说明：适用对象、包含内容和交付边界。\n4. 联系方式：客户可以怎样找到你。\n\n这是本地演示的预设回答，用于体验对话界面。"
    : question.includes("咨询")
      ? "可以把咨询路径做得更直接：\n\n• 首屏给出清楚的行动入口。\n• 服务详情说明交付范围，减少猜测。\n• 用简短表单收集项目用途、功能和时间。\n• 提供邮箱与复制方式，避免邮件应用不可用时无路可走。\n\n这是本地演示的预设回答，不是实时模型生成。"
      : "可以从三个问题开始：\n\n1. 网站给谁看？明确主要访问者。\n2. 希望对方做什么？浏览作品、了解服务，还是发起咨询。\n3. 哪些内容能帮助对方决定？准备介绍、作品、服务和联系方式。\n\n先完成核心路径，再细化视觉和交互。\n\n这是本地预设回答；你输入的内容不会发送到服务器。";
const stop = () => {
  if (timer) clearInterval(timer);
  timer = undefined;
  generating.value = false;
  status.value = "已停止生成，可以继续提问。";
};
const send = (suggestion?: string) => {
  const question = (suggestion || input.value).trim();
  if (!question || generating.value) return;
  messages.value.push(
    { role: "user", text: question },
    { role: "assistant", text: "" },
  );
  input.value = "";
  generating.value = true;
  status.value = "正在演示逐字输出…";
  const response = replyFor(question);
  const index = messages.value.length - 1;
  let offset = 0;
  timer = setInterval(() => {
    offset = Math.min(offset + 1, response.length);
    messages.value[index]!.text = response.slice(0, offset);
    if (offset === response.length) {
      clearInterval(timer);
      timer = undefined;
      generating.value = false;
      status.value = "演示回答已完成。";
    }
  }, 45);
};
const reset = () => {
  stop();
  messages.value = [];
  input.value = "";
  status.value = "已开启新对话。";
};
onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>
<template>
  <div class="standalone-demo" :class="`standalone-demo--${mode}`">
    <div class="demo-toolbar">
      <a :href="home">← 返回 {{ siteConfig.brand }}</a
      ><span>交互演示 · 示例内容</span
      ><a v-if="mode === 'portfolio'" href="?demo=assistant">体验 AI 界面 ↗</a
      ><a v-else href="?demo=portfolio">体验品牌网站 ↗</a>
    </div>
    <template v-if="mode === 'portfolio'">
      <header class="sample-header">
        <a href="#sample-top">拾光 <span>STUDIO</span></a>
        <nav aria-label="演示站导航">
          <a href="#sample-works">作品</a><a href="#sample-about">关于</a
          ><a href="#sample-contact">聊聊合作 ↗</a>
        </nav>
      </header>
      <main id="sample-top" class="sample-main">
        <section class="sample-hero">
          <div>
            <p class="section-kicker">DESIGNED WITH INTENTION</p>
            <h1>把日常的灵感，<br /><em>做成自己的表达。</em></h1>
            <p>
              一个面向独立创作者的展示站示例。<br />用作品、文字与留白，让你的风格自然被看见。
            </p>
            <a class="button button--primary" href="#sample-works"
              >探索作品 ↓</a
            >
          </div>
          <div
            class="sample-hero__image"
            :style="{
              backgroundImage: `url(${assetUrl(siteConfig.hero.image)})`,
            }"
          >
            <span>STUDIO NOTES / 01</span>
          </div>
        </section>
        <section id="sample-works" class="sample-works">
          <div class="section-heading section-heading--row">
            <div>
              <p class="section-kicker">SELECTED EXPLORATIONS</p>
              <h2>一些用心的表达。</h2>
            </div>
            <div class="sample-filters" aria-label="作品分类">
              <button
                v-for="item in ['全部', '品牌设计', '网站设计']"
                :key="item"
                type="button"
                :aria-pressed="category === item"
                @click="category = item"
              >
                {{ item }}
              </button>
            </div>
          </div>
          <div class="sample-work-grid">
            <article v-for="item in visibleSamples" :key="item.number">
              <div
                class="sample-poster"
                :class="`sample-poster--${item.number}`"
              >
                <small>SHIGUANG / {{ item.number }}</small
                ><strong>{{ item.title }}</strong
                ><span>LESS, BUT THOUGHTFUL.</span>
              </div>
              <small>{{ item.type }} · 概念示例</small>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </div>
        </section>
        <section id="sample-about" class="sample-about">
          <p class="section-kicker">SLOW DOWN. LOOK CLOSER.</p>
          <h2>设计，是把想说的话<br />表达得更清楚。</h2>
          <p>
            这里展示的是模板内容与交互示例，没有真实客户或业绩背书。你可以替换品牌、介绍、作品和图片，把它变成自己的空间。
          </p>
        </section>
        <section id="sample-contact" class="sample-contact">
          <div>
            <p class="section-kicker">LET’S TALK</p>
            <h2>给下一个想法，<br />留一个开始。</h2>
            <p>此表单仅演示校验与反馈，不发送或保存内容。</p>
          </div>
          <form @submit.prevent="demoSubmitted = true">
            <label
              >称呼<input
                name="sample-name"
                required
                autocomplete="name"
                maxlength="60"
                placeholder="你的名字" /></label
            ><label
              >你的想法<textarea
                name="sample-message"
                rows="3"
                required
                minlength="5"
                maxlength="1000"
                placeholder="想一起做些什么？"
              ></textarea></label
            ><button class="button button--primary" type="submit">
              体验提交反馈 →
            </button>
            <p v-if="demoSubmitted" role="status">
              已完成演示，内容未发送。正式项目可接入你的表单服务。
            </p>
          </form>
        </section>
      </main>
      <footer class="sample-footer">
        拾光 STUDIO · 概念展示 / 示例内容 <a :href="home">返回主站 ↗</a>
      </footer>
    </template>
    <template v-else>
      <div class="assistant-layout">
        <aside class="assistant-sidebar">
          <a class="assistant-brand" href="?demo=assistant">✧ 灵感助手</a
          ><button type="button" class="new-chat" @click="reset">
            ＋ 新建对话
          </button>
          <p>让想法变得更清楚</p>
          <div class="assistant-notice">
            <strong>本地交互演示</strong>
            <p>
              使用预设回复模拟生成过程。没有连接模型，不上传输入，刷新后清空。
            </p>
          </div>
        </aside>
        <main class="assistant-main">
          <header>
            <span>灵感工作台 <small>LOCAL DEMO</small></span
            ><button class="text-button" type="button" @click="reset">
              清空对话
            </button>
          </header>
          <div class="conversation">
            <div v-if="!messages.length" class="assistant-welcome">
              <span aria-hidden="true">✧</span>
              <p class="section-kicker">A LITTLE CLARITY, A NEW POSSIBILITY</p>
              <h1>你好，今天想探索什么？</h1>
              <p>从一个小问题，整理出下一步方向。</p>
              <div class="suggestions">
                <button
                  v-for="suggestion in suggestions"
                  :key="suggestion"
                  type="button"
                  @click="send(suggestion)"
                >
                  {{ suggestion }} <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
            <article
              v-for="(message, index) in messages"
              :key="index"
              class="demo-message"
              :class="`demo-message--${message.role}`"
            >
              <span>{{ message.role === "user" ? "你" : "✧" }}</span>
              <div>
                <strong>{{
                  message.role === "user" ? "你" : "灵感助手 · 预设演示"
                }}</strong>
                <p>{{ message.text || "正在准备演示回答…" }}</p>
              </div>
            </article>
          </div>
          <form class="assistant-compose" @submit.prevent="send()">
            <label class="visually-hidden" for="demo-question"
              >输入你的问题</label
            ><textarea
              id="demo-question"
              v-model="input"
              maxlength="500"
              rows="2"
              placeholder="输入问题，体验对话界面…"
              :disabled="generating"
              @keydown.enter.exact.prevent="send()"
            ></textarea
            ><button v-if="generating" type="button" @click="stop">
              停止生成 ■</button
            ><button v-else type="submit" :disabled="!input.trim()">
              发送 ↑
            </button>
          </form>
          <p class="assistant-status" role="status">
            {{ status || "Enter 发送 · Shift + Enter 换行 · 本地预设演示" }}
          </p>
        </main>
      </div>
    </template>
  </div>
</template>
