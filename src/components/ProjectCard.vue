<script setup lang="ts">
import { ref } from "vue";
const open = ref(false);
defineProps<{
  index: string;
  title: string;
  description: string;
  tags: string[];
  accent: "violet" | "cyan" | "lime" | "blue";
  points?: string[];
}>();
</script>
<template>
  <article class="project-card" :class="`project-card--${accent}`">
    <div class="project-card__visual" aria-hidden="true">
      <div class="mini-site">
        <div class="mini-site__nav">
          <b
            >●
            {{
              accent === "violet"
                ? "AI ASSISTANT"
                : accent === "cyan"
                  ? "RENTAL / 租赁"
                  : accent === "lime"
                    ? "徐农荟"
                    : "DATA / INSIGHT"
            }}</b
          ><span>首页　探索　关于</span>
        </div>
        <div v-if="accent === 'violet'" class="mini-ai">
          <div>
            <small>INTELLIGENCE FOR IDEAS</small
            ><strong>专业的问题，<br />让 AI 帮你探索。</strong
            ><em>开始对话 ↗</em>
          </div>
          <div class="mini-chat">
            <b>✧ 美丽秘寻</b>
            <p>探索原料的更多可能</p>
            <hr />
            <p>成分特性与应用方向</p>
            <hr />
            <p>继续追问…</p>
          </div>
        </div>
        <div v-else-if="accent === 'cyan'" class="mini-rental">
          <strong>发现需要的，<br />连接更多可能。</strong>
          <div><i>◒</i><i>⌂</i><i>▤</i></div>
          <p>商品　/　订单　/　商家</p>
        </div>
        <div v-else-if="accent === 'lime'" class="mini-farm">
          <small>AGRICULTURE & CONNECTION</small
          ><strong>连接供需，<br />让好物抵达。</strong>
          <div><i>采购</i><i>供应</i><i>行情</i></div>
        </div>
        <div v-else class="mini-data">
          <strong>农业数据 · 洞察</strong>
          <div class="mini-data__chart">
            <i
              v-for="n in 8"
              :key="n"
              :style="{ height: `${25 + ((n * 23) % 65)}%` }"
            ></i>
          </div>
          <p>数据可视化 / 业务平台</p>
        </div>
      </div>
      <span class="project-card__visual-note">内容示意 · 非产品截图</span>
    </div>
    <div class="project-card__body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="project-card__bottom">
        <div class="project-card__tags">
          <span v-for="tag in tags.slice(0, 3)" :key="tag">{{ tag }}</span>
        </div>
        <button
          type="button"
          :aria-expanded="open"
          :aria-controls="`project-${index}`"
          :aria-label="`${open ? '收起' : '查看'}${title}项目职责`"
          @click="open = !open"
        >
          {{ open ? "−" : "→" }}
        </button>
      </div>
      <ul v-if="open" :id="`project-${index}`" class="project-card__points">
        <li v-for="point in points" :key="point">{{ point }}</li>
      </ul>
    </div>
  </article>
</template>
