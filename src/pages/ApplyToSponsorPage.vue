<template>
  <section class="section">
    <div class="container">
      <div class="kicker">&lt;01&gt; // Apply</div>
      <div class="h2">Accelerate the BUIDLers, Shape the Future</div>
      <p class="muted">
        As a sponsor, we’ll curate your experience to align with your goals—brand visibility, local hub
        activation, and access to a strong pipeline of African builders.
      </p>

      <div class="card" style="margin-top: 18px">
        <div class="h3">Application Form (placeholder)</div>
        <p class="muted">Upon submission, we will send you our sponsorship deck. (Wire this to your backend.)</p>
        <form class="form" @submit.prevent="submit">
          <label class="field">
            <span class="muted">Company</span>
            <input v-model="company" class="input" required />
          </label>
          <label class="field">
            <span class="muted">Contact email</span>
            <input v-model="email" class="input" type="email" required />
          </label>
          <label class="field">
            <span class="muted">Goals</span>
            <textarea v-model="goals" class="input" rows="6" required />
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
const company = ref("");
const email = ref("");
const goals = ref("");

function submit() {
  router.push("/thank-you");
}
</script>

<style scoped>
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

