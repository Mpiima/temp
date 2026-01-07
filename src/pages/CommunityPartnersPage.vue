<template>
  <section class="section">
    <div class="container">
      <div class="kicker">&lt;01&gt; // Apply</div>
      <div class="h2">Node Engine Community Partner Program</div>
      <p class="muted">
        Whether you're an accelerator, DAO, university, or Web3 collective, collaborate with a growing network
        of ecosystem enablers. Invite your community to W3Node and win cool prizes.
      </p>

      <div class="grid grid--2" style="margin-top: 18px">
        <div class="card">
          <div class="h3">How Your Community Wins</div>
          <ul class="bullets">
            <li class="muted">Free full access to 2-day conference</li>
            <li class="muted">Free full access to 3-day hackathon pass</li>
            <li class="muted">Eligible for hackathon prizes</li>
            <li class="muted">Travel grant winners receive airfare + accommodation + meals</li>
          </ul>
        </div>
        <div class="card">
          <div class="h3">How You Win</div>
          <ul class="bullets">
            <li class="muted">Leaderboard points for invites</li>
            <li class="muted">Extra travel grant opportunity for community founder</li>
            <li class="muted">Private dinner + community manager perks</li>
          </ul>
        </div>
      </div>

      <div class="card" style="margin-top: 18px">
        <div class="h3">Application Form (placeholder)</div>
        <p class="muted">Applications are shown as closed on the live site; enable/disable as needed.</p>
        <form class="form" @submit.prevent="submit">
          <label class="field">
            <span class="muted">Community name</span>
            <input v-model="community" class="input" required />
          </label>
          <label class="field">
            <span class="muted">Contact email</span>
            <input v-model="email" class="input" type="email" required />
          </label>
          <label class="field">
            <span class="muted">How many hackers can you invite?</span>
            <input v-model="hackers" class="input" type="number" min="0" required />
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
const community = ref("");
const email = ref("");
const hackers = ref(10);

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

