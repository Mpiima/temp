<template>
  <div class="pill" :title="title">
    <span v-if="isPassed" class="ended">LIVE / STARTED</span>
    <template v-else>
      <span class="num">{{ parts.days }}</span><span class="label">D</span>
      <span class="sep">|</span>
      <span class="num">{{ parts.hours }}</span><span class="label">H</span>
      <span class="sep">|</span>
      <span class="num">{{ parts.minutes }}</span><span class="label">M</span>
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  targetIso: { type: String, required: true },
});

const now = ref(Date.now());
let timerId;

onMounted(() => {
  timerId = window.setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  window.clearInterval(timerId);
});

const targetMs = computed(() => new Date(props.targetIso).getTime());
const deltaMs = computed(() => Math.max(0, targetMs.value - now.value));
const isPassed = computed(() => targetMs.value <= now.value);

const parts = computed(() => {
  const totalSeconds = Math.floor(deltaMs.value / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
});

const title = computed(() => `Countdown to ${props.targetIso}`);
</script>

<style scoped>
.num {
  color: var(--text);
}
.label,
.sep {
  color: var(--muted);
}
.ended {
  color: var(--accent);
}
</style>

