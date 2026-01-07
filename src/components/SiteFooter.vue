<template>
  <footer class="footer" id="contact">
    <div class="divider" />
    <div class="container footer__inner">
      <div class="footer__col">
        <div class="kicker">WRITE US A MAIL</div>
        <a class="footer__link" :href="`mailto:${site.contactEmail}`">{{ site.contactEmail }}</a>
        <div class="footer__copy muted">W3Node © 2025</div>
      </div>

      <div class="footer__col">
        <div class="kicker">LINKS</div>
        <div class="footer__links">
          <router-link class="footer__link" to="/">Home</router-link>
          <router-link class="footer__link" to="/apply">Apply</router-link>
          <router-link class="footer__link" to="/travel">Travel</router-link>
          <router-link class="footer__link" to="/node-engine">Node Engine</router-link>
        </div>
      </div>

      <div class="footer__col">
        <div class="kicker">SOCIAL</div>
        <div class="footer__social">
          <a
            v-for="s in site.social"
            :key="s.label"
            class="footer__socialLink"
            :href="s.href"
            target="_blank"
            rel="noreferrer"
            >{{ s.label }}</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { site } from "../data/site";
</script>

<style scoped>
.footer {
  padding: 24px 0 60px;
}

.footer__inner {
  padding-top: 26px;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 22px;
}

.footer__link {
  display: inline-flex;
  padding: 8px 0;
  color: var(--muted);
}

.footer__link:hover {
  color: var(--text);
}

.footer__copy {
  margin-top: 10px;
  font-size: 12px;
}

.footer__links {
  display: flex;
  flex-direction: column;
}

.footer__social {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.footer__socialLink {
  display: inline-flex;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
}

.footer__socialLink:hover {
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.22);
}

@media (max-width: 860px) {
  .footer__inner {
    grid-template-columns: 1fr;
  }
}
</style>

