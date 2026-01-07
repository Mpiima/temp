<template>
  <section class="section">
    <div class="container">
      <div class="kicker">TRAVEL INFO</div>
      <div class="h2">Visit Cape Town</div>
      <p class="muted">{{ site.location }} · {{ site.datesLabel }}</p>

      <div class="grid grid--2" style="margin-top: 18px">
        <div class="card" id="visa">
          <div class="kicker">&lt;01&gt; // Visa Requirements</div>
          <div class="h3">Requirements To Enter South Africa</div>
          <p class="muted">
            US citizens planning a short-term holiday or business trip to South Africa normally do not need a
            visa under the exemption scheme (policies can change). Check your local embassy/consulate for the
            latest rules.
          </p>
          <ul class="bullets">
            <li class="muted">Valid passport (6+ months validity)</li>
            <li class="muted">Sufficient funds for your stay</li>
            <li class="muted">Return ticket / onward ticket</li>
          </ul>
        </div>

        <div class="card" id="flights">
          <div class="kicker">&lt;03&gt; // Flight Info</div>
          <div class="h3">Cape Town International</div>
          <p class="muted">
            Cape Town International Airport is ~20km from the city center with major transport options,
            shopping/dining, and great access to key attractions.
          </p>
          <div class="grid grid--2" style="margin-top: 10px">
            <div class="card mini">
              <div class="muted">Atlanta, USA (ATL) → CPT</div>
            </div>
            <div class="card mini">
              <div class="muted">New York, USA (NY) → CPT</div>
            </div>
          </div>
          <p class="muted" style="margin-top: 12px">
            Transfers: Uber is widely available. You can also use shuttle providers.
          </p>
        </div>
      </div>

      <div class="card" id="hotels" style="margin-top: 18px">
        <div class="kicker">// Hotels</div>
        <div class="h3">Where to stay</div>
        <p class="muted">
          The V&amp;A Waterfront offers an impressive selection of hotels, walking distance to Cape Town city
          centre and attractions. AirBnB can be a viable option too.
        </p>
        <div class="grid grid--2" style="margin-top: 12px">
          <div class="card mini" v-for="h in hotels" :key="h.name">
            <div class="h3">{{ h.name }}</div>
            <div class="muted">{{ h.note }}</div>
          </div>
        </div>
      </div>

      <div class="card" id="tickets" style="margin-top: 18px">
        <div class="kicker">&lt;06&gt; // Registration</div>
        <div class="h3">Tickets</div>
        <p class="muted">
          Ticket checkout is a placeholder in this clone. Wire these buttons to Stripe/Paystack/etc.
        </p>
        <div class="grid grid--3" style="margin-top: 12px">
          <div v-for="p in pricing" :key="p.name" class="card mini">
            <div class="h3">{{ p.name }}</div>
            <div class="muted">{{ p.price }}</div>
            <button class="btn btn--accent" type="button" @click="fakeCheckout(p.name)">
              {{ p.cta }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from "../data/site";

const hotels = [
  { name: "Sun International The Table Bay", note: "5 Star Hotel | V&A Waterfront" },
  { name: "The Capital 15 On Orange Hotel & Spa", note: "5 Star Hotel | Gardens" },
  { name: "Radisson RED Cape Town V&A Waterfront", note: "4 Star Hotel | Waterfront" },
  { name: "City Lodge Hotel V&A Waterfront", note: "3 Star Hotel | Waterfront" },
];

const pricing = [
  { name: "Full Access Pass", price: "$20 / R550", cta: "Buy Now" },
  { name: "Community Manager Pass", price: "$250 / R4200", cta: "Buy Now" },
  { name: "Hackathon / Travel Grant", price: "Free (Mahala)", cta: "Apply Now" },
];

function fakeCheckout(plan) {
  window.alert(`Checkout flow placeholder for: ${plan}`);
}
</script>

<style scoped>
.bullets {
  margin: 10px 0 0;
  padding-left: 18px;
}
.mini {
  padding: 14px;
}
</style>

