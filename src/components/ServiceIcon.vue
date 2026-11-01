<script setup lang="ts">
defineProps<{
  name: 'website' | 'h5' | 'assistant' | 'miniapp'
}>()
</script>

<template>
  <svg class="service-icon" :class="`service-icon--${name}`" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <template v-if="name === 'website'">
      <path class="service-icon__shade" d="M12 52h40" />
      <path class="service-icon__fill" d="M27 43h10l2 9H25l2-9Z" />
      <rect class="service-icon__surface" x="9" y="11" width="46" height="34" rx="5" />
      <path class="service-icon__line" d="M9 20h46M25 52h14" />
      <circle class="service-icon__dot" cx="15" cy="16" r="1" />
      <circle class="service-icon__dot" cx="19" cy="16" r="1" />
      <rect class="service-icon__fill" x="15" y="25" width="13" height="13" rx="2" />
      <path class="service-icon__line" d="M34 27h13M34 32h13M34 37h8" />
    </template>
    <template v-else-if="name === 'h5'">
      <rect class="service-icon__fill" x="12" y="15" width="27" height="40" rx="5" transform="rotate(-9 12 15)" />
      <rect class="service-icon__surface" x="23" y="8" width="28" height="46" rx="5" />
      <path class="service-icon__line" d="M33 13h8M34 49h6" />
      <rect class="service-icon__fill" x="28" y="20" width="18" height="15" rx="2" />
      <path class="service-icon__line" d="m35 24-3 3 3 3m5-6 3 3-3 3M29 40h16M29 44h10" />
    </template>
    <template v-else-if="name === 'assistant'">
      <path class="service-icon__line" d="M30 17v-5M14 30h-4v9h4m34-9h4v9h-4" />
      <circle class="service-icon__fill" cx="30" cy="10" r="3" />
      <rect class="service-icon__surface" x="14" y="19" width="34" height="29" rx="10" />
      <rect class="service-icon__ink" x="20" y="27" width="22" height="12" rx="5" />
      <path class="service-icon__eye" d="M26 32v2m10-2v2" />
      <path class="service-icon__fill" d="M42 40h12a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-5l-5 4v-4h-2a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z" />
      <path class="service-icon__line" d="M44 46h8" />
    </template>
    <template v-else>
      <rect class="service-icon__fill" x="8" y="15" width="39" height="37" rx="7" />
      <rect class="service-icon__surface" x="17" y="8" width="39" height="42" rx="7" />
      <path class="service-icon__line" d="M17 19h39" />
      <circle class="service-icon__dot" cx="23" cy="14" r="1" />
      <path class="service-icon__line" d="M45 14h5" />
      <rect class="service-icon__fill" x="24" y="25" width="9" height="9" rx="3" />
      <rect class="service-icon__fill" x="39" y="25" width="9" height="9" rx="3" />
      <rect class="service-icon__fill" x="24" y="37" width="9" height="7" rx="2.5" />
      <path class="service-icon__line" d="M39 40h9" />
    </template>
  </svg>
</template>
