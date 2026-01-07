<template>
  <div class="layout">
    <SiteNav />
    <main class="main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteFooter from "../components/SiteFooter.vue";
import SiteNav from "../components/SiteNav.vue";
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>

