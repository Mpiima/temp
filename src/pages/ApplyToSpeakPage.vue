<template>
  <section class="section">
    <div class="container">
      <div class="kicker">&lt;01&gt; // Apply</div>
      <div class="h2">Ready to inspire African Builders</div>
      <p class="muted">
        W3Node is calling on visionary builders, experts, thought leaders, and founders to take the stage.
        Apply to be a speaker and help us ignite conversations that accelerate the future of tech.
      </p>

      <div class="grid grid--2" style="margin-top: 18px">
        <div class="card">
          <div class="h3">Who Can Apply</div>
          <ul class="bullets">
            <li class="muted">Sponsors (subject-matter experts welcome)</li>
            <li class="muted">Community Partners</li>
            <li class="muted">W3Node / W3Africa Alumni</li>
          </ul>
        </div>
        <div class="card">
          <div class="h3">Speaker Benefits</div>
          <ul class="bullets">
            <li class="muted">Two complimentary VIP tickets</li>
            <li class="muted">Access to invite-only events</li>
            <li class="muted">Promotion + produced media from the event</li>
          </ul>
        </div>
      </div>

      <div class="card" style="margin-top: 18px">
        <div class="h3">Application Form (placeholder)</div>
        <form class="form" @submit.prevent="submit">
          <label class="field">
            <span class="muted">Name</span>
            <input v-model="name" class="input" required />
          </label>
          <label class="field">
            <span class="muted">Email</span>
            <input v-model="email" class="input" type="email" required />
          </label>
          <label class="field">
            <span class="muted">Proposed topic</span>
            <input v-model="topic" class="input" required />
          </label>
          <label class="field">
            <span class="muted">Abstract</span>
            <textarea v-model="abstract" class="input" rows="6" required />
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
const topic = ref("");
const abstract = ref("");

function submit() {
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

