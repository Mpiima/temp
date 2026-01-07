<template>
  <section class="section">
    <div class="container">
      <div class="kicker">&lt;01&gt; // Apply</div>
      <div class="h2">One Application. Multiple Opportunities.</div>
      <p class="muted">
        Pick what you want to apply for — speaking, sponsorship, hackathon/travel grant, or the
        community partner program.
      </p>

      <div class="grid grid--2" style="margin-top: 18px">
        <router-link class="card link" to="/apply-to-speak">
          <div class="h3">Speaker Application</div>
          <p class="muted">Inspire African builders and ignite conversations.</p>
          <div class="pill">Apply to Speak</div>
        </router-link>

        <router-link class="card link" to="/apply-to-sponsor">
          <div class="h3">Sponsor Application</div>
          <p class="muted">Accelerate the BUIDLers and shape the future.</p>
          <div class="pill">Apply to Sponsor</div>
        </router-link>

        <router-link class="card link" to="/node-engine">
          <div class="h3">Node Engine (Hackathon + Travel Grant)</div>
          <p class="muted">One application. Two opportunities.</p>
          <div class="pill">Apply to Hack</div>
        </router-link>

        <router-link class="card link" to="/community-partners">
          <div class="h3">Community Partners</div>
          <p class="muted">Bring hackers, earn rewards — invite your community.</p>
          <div class="pill">Become a Community Partner</div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.link {
  transition: transform 120ms ease, border-color 120ms ease;
}
.link:hover {
  transform: translateY(-2px);
  border-color: rgba(200, 255, 46, 0.45);
}
</style>

