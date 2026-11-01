<script setup lang="ts">
import { onBeforeUnmount, ref, watch, useId } from "vue";
const props = defineProps<{ open: boolean; title: string }>();
const emit = defineEmits<{ close: [] }>();
const titleId = useId();
const dialog = ref<HTMLDialogElement>();
let previousOverflow = "";
watch(
  () => props.open,
  (open) => {
    if (open && dialog.value && !dialog.value.open) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog.value.showModal();
    } else if (!open && dialog.value?.open) {
      dialog.value.close();
      document.body.style.overflow = previousOverflow;
    }
  },
  { flush: "post" },
);
onBeforeUnmount(() => {
  if (dialog.value?.open) document.body.style.overflow = previousOverflow;
});
</script>
<template>
  <dialog
    ref="dialog"
    class="content-dialog"
    :aria-labelledby="titleId"
    @cancel.prevent="emit('close')"
    @click="$event.target === dialog && emit('close')"
  >
    <div class="content-dialog__inner">
      <button
        class="dialog-close"
        type="button"
        aria-label="关闭详情"
        @click="emit('close')"
      >
        ×
      </button>
      <p class="section-kicker">PROJECT NOTES</p>
      <h2 :id="titleId">{{ title }}</h2>
      <slot />
    </div>
  </dialog>
</template>
