<template>
  <section class="section">
    <div class="container">
      <div class="kicker">&lt;01&gt; // Apply</div>
      <div class="h2">Node Engine Hackathon &amp; Travel Grant</div>
      <p class="muted">
        When you apply to the Hackathon, you’ll automatically be considered for the Node Engine Travel
        Grant designed to bring the most promising talent to Cape Town.
      </p>

      <div class="grid grid--2" style="margin-top: 18px">
        <div class="card">
          <div class="h3">Hackathon &amp; Travel Grant Selection Criteria</div>
          <ul class="bullets">
            <li class="muted">Real Solutions</li>
            <li class="muted">Builder Mindset</li>
            <li class="muted">Technical Proficiency</li>
          </ul>
        </div>

        <div class="card">
          <div class="h3">What’s Included in the Travel Grant</div>
          <ul class="bullets">
            <li class="muted">Airfare (Within Africa)</li>
            <li class="muted">Accommodation</li>
            <li class="muted">Meals</li>
          </ul>
        </div>
      </div>

      <div class="card" style="margin-top: 18px">
        <div class="h3">Application Form (placeholder)</div>
        <p class="muted">
          This repo doesn’t include W3Node’s real form backend. This is a frontend clone-ready
          form you can wire up to your own endpoint.
        </p>

        <form class="form" @submit.prevent="submit">
          <label class="field">
            <span class="muted">Full name</span>
            <input v-model="name" class="input" required />
          </label>
          <label class="field">
            <span class="muted">Email</span>
            <input v-model="email" class="input" type="email" required />
          </label>
          <label class="field">
            <span class="muted">What are you building?</span>
            <textarea v-model="project" class="input" rows="5" required />
          </label>
          <button class="btn btn--accent" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const email = ref("");
const project = ref("");

function submit() {
  // Placeholder only.
  router.push("/thank-you");
}
</script>

<style scoped>
.bullets {
  margin: 10px 0 0;
  padding-left: 18px;
}

.form {
  display: grid;
  gap: 12px;
  margin-top: 14px;
  max-width: 620px;
}

.field {
  display: grid;
  gap: 6px;
}

.input {
  width: 100%;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 12px 12px;
  outline: none;
}

.input:focus {
  border-color: rgba(200, 255, 46, 0.6);
}
</style>

