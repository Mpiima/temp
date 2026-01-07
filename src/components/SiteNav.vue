<template>
  <header class="header">
    <div class="container header__inner">
      <div class="brand">
        <router-link class="brand__logo" to="/">{{ site.brand }}</router-link>
        <div class="brand__meta">
          <span class="brand__slash">/</span>
          <span class="brand__time">{{ nowLabel }}</span>
        </div>
      </div>

      <nav class="nav">
        <router-link class="nav__link" to="/">Home</router-link>
        <router-link class="nav__link" to="/apply">Apply</router-link>
        <router-link class="nav__link" to="/travel">Travel</router-link>
        <a class="nav__link" href="#contact">Contact</a>
      </nav>

      <div class="actions">
        <CountdownTimer :target-iso="site.eventStartIso" />
        <router-link class="btn btn--accent" :to="{ path: '/', hash: '#tickets' }"
          >Get Tickets</router-link
        >
      </div>
    </div>
    <div class="divider" />
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { site } from "../data/site";
import CountdownTimer from "./CountdownTimer.vue";

const now = ref(new Date());
let timerId;

onMounted(() => {
  timerId = window.setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  window.clearInterval(timerId);
});

const nowLabel = computed(() => {
  // Matches the site's header vibe (HH:MM:SS)
  return now.value.toLocaleTimeString(undefined, { hour12: false });
});
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(7, 7, 10, 0.72);
  backdrop-filter: blur(10px);
}

.header__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.brand__logo {
  font-family: var(--font-display);
  letter-spacing: 0.06em;
}

.brand__meta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-family: var(--font-ui);
  font-size: 12px;
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.nav__link {
  color: var(--muted);
  padding: 10px 10px;
  border-radius: 999px;
  transition: background 120ms ease, color 120ms ease;
}

.nav__link:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
}

@media (max-width: 900px) {
  .header__inner {
    grid-template-columns: 1fr;
    justify-items: start;
  }
  .nav {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .actions {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>

