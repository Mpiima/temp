<template>
  <div>
    <section class="section hero">
      <div class="container">
        <div class="pill hero__pill">
          <span class="muted">{{ site.location }}</span>
          <span class="sep">|</span>
          <span class="muted">{{ site.datesLabel }}</span>
        </div>

        <div class="h1">W3Node Conference<br />&amp; Hackathon</div>
        <p class="hero__sub muted">
          W3Node is Africa's premier developer and community conference. We connect
          Africa's thriving developer ecosystem with global blockchain companies to
          accelerate adoption and commercial success.
        </p>

        <div class="hero__cta">
          <a class="btn btn--accent" href="#tickets">Get Tickets</a>
          <router-link class="btn" to="/apply">Apply</router-link>
          <router-link class="btn" to="/travel">Book Your Trip</router-link>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container grid grid--2">
        <div class="card">
          <div class="kicker">&lt;01&gt; // About</div>
          <div class="h2">Welcome to Africa’s Premier Web3 Developer Conference and Hackathon</div>
          <p class="muted">
            W3Node provides a platform that showcases developers and founding teams,
            upskills community managers, and provides investors with industry insights.
          </p>
          <div class="hero__cta">
            <router-link class="btn" to="/apply-to-sponsor">Become A Sponsor</router-link>
            <router-link class="btn" to="/apply-to-speak">Apply To Speak</router-link>
            <router-link class="btn" to="/node-engine">Apply To Hack</router-link>
            <router-link class="btn" to="/community-partners">Become a Community Partner</router-link>
          </div>
        </div>

        <div class="card">
          <div class="kicker">Who The Conference is For</div>
          <div class="grid grid--2">
            <div class="card mini">
              <div class="h3">Developers &amp; Founders</div>
              <div class="muted">For individuals and teams building real products.</div>
            </div>
            <div class="card mini">
              <div class="h3">Community Leads</div>
              <div class="muted">Grow deep engagement and expand your builder network.</div>
            </div>
            <div class="card mini">
              <div class="h3">Ecosystem Leads</div>
              <div class="muted">Meet builders, teams, and partners across Africa.</div>
            </div>
            <div class="card mini">
              <div class="h3">Investors</div>
              <div class="muted">Discover talent and early-stage product momentum.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="node-engine" class="section">
      <div class="container">
        <div class="kicker">&lt;02&gt; // Node Engine</div>
        <div class="h2">Hackathon Tracks</div>
        <p class="muted">
          Node Engine is a growing network of developers, designers, and product thinkers
          shaping the future of tech from the African continent and beyond.
        </p>
        <div class="grid grid--4">
          <div v-for="t in tracks" :key="t.title" class="card">
            <div class="kicker">{{ t.code }}</div>
            <div class="h3">{{ t.title }}</div>
            <p class="muted">{{ t.desc }}</p>
          </div>
        </div>
        <div style="margin-top: 18px">
          <router-link class="btn btn--accent" to="/node-engine">Apply Now</router-link>
        </div>
      </div>
    </section>

    <section id="travel" class="section">
      <div class="container grid grid--2">
        <div class="card">
          <div class="kicker">&lt;03&gt; // Visit Cape Town</div>
          <div class="h2">Explore &amp; Build in Cape Town</div>
          <p class="muted">
            Cape Town blends rich African heritage with global tech culture. Whether you're hiking
            Lion's Head at sunrise or jamming with founders at First Thursdays, this city is built
            for inspiration and connection.
          </p>
          <router-link class="btn btn--accent" to="/travel">Book Your Trip</router-link>
        </div>
        <div class="card">
          <div class="kicker">&lt;04&gt; // Sponsorship</div>
          <div class="h2">Accelerate the BUIDLers, Shape the Future</div>
          <p class="muted">
            As a sponsor, we’ll curate your experience to align with your goals—whether that’s
            establishing a local hub, accessing our pipeline of top African founders, or amplifying
            your brand’s visibility.
          </p>
          <router-link class="btn" to="/apply-to-sponsor">Become A Sponsor</router-link>
        </div>
      </div>
    </section>

    <section id="community" class="section">
      <div class="container">
        <div class="kicker">&lt;05&gt; // Community</div>
        <div class="h2">We Believe in the Community Economy</div>
        <div class="grid grid--2">
          <div class="card">
            <p class="muted">
              The opportunities are vast and complex across the diaspora. As we innovate and build solutions,
              we’ve designed this community to honor individual sovereignty, enable creators to capture more of
              the value that they create, and as a community, for all of our incentives to be aligned.
            </p>
            <div class="pill">
              <span class="muted">Andù nìo indo (people are wealth)</span>
            </div>
          </div>
          <div class="card">
            <div class="h3">Become a Community Partner</div>
            <p class="muted">
              Bring hackers, earn rewards. Invite your community to W3Node and win cool prizes.
            </p>
            <router-link class="btn btn--accent" to="/community-partners"
              >Become A Community Partner</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <section id="speakers" class="section">
      <div class="container">
        <div class="kicker">&lt;07&gt; // Speakers</div>
        <div class="h2">Meet Our Esteemed Speakers and Industry Thought Leaders</div>
        <div class="grid grid--3" style="margin-top: 16px">
          <div v-for="s in speakers" :key="s.name" class="card">
            <div class="h3">{{ s.name }}</div>
            <div class="muted">{{ s.title }}</div>
          </div>
        </div>
        <div style="margin-top: 18px">
          <router-link class="btn" to="/apply-to-speak">Apply To Be A Speaker</router-link>
        </div>
      </div>
    </section>

    <section id="tickets" class="section">
      <div class="container">
        <div class="kicker">&lt;08&gt; // Registration</div>
        <div class="h2">Get Tickets</div>
        <div class="grid grid--3" style="margin-top: 16px">
          <div v-for="p in pricing" :key="p.name" class="card">
            <div class="h3">{{ p.name }}</div>
            <div class="muted">{{ p.note }}</div>
            <div class="price">{{ p.price }}</div>
            <ul class="bullets">
              <li v-for="b in p.bullets" :key="b" class="muted">{{ b }}</li>
            </ul>
            <button class="btn btn--accent" type="button" @click="fakeCheckout(p.name)">
              {{ p.cta }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="section">
      <div class="container">
        <div class="kicker">Frequently Asked Questions</div>
        <div class="h2">Asked Questions</div>
        <div class="grid" style="margin-top: 16px">
          <details v-for="q in faqs" :key="q.q" class="card">
            <summary class="h3">{{ q.q }}</summary>
            <p class="muted" style="margin: 10px 0 0">{{ q.a }}</p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { site } from "../data/site";

const tracks = [
  {
    code: "01",
    title: "Payments and Stablecoins",
    desc: "Remittance, mobile payments, and stablecoin infrastructure.",
  },
  {
    code: "02",
    title: "Identity and Security",
    desc: "Secure identity access and microtransactions at scale.",
  },
  {
    code: "03",
    title: "Decentralized AI & DePIN",
    desc: "Agentic future meets decentralized compute and networks.",
  },
  {
    code: "04",
    title: "Gaming and Entertainment",
    desc: "NFTs, metaverse, and new entertainment models.",
  },
];

const speakers = [
  { name: "Robert Franklin III", title: "RFS Consulting - Managing Partner" },
  { name: "Monica Singer", title: "Consensys - Profesor" },
  { name: "Brenton Naicker", title: "CV Labs - Principal & Head of Growth" },
  { name: "Craig Risi", title: "Old Mutual - Head of Engineering" },
  { name: "Eric Annan", title: "AYAHQ - CEO & Founder" },
  { name: "Nonkululeko Ntuli", title: "HER DAO South Africa - Community Manager" },
  { name: "Allan Mag'eni", title: "Filecoin - Software Developer" },
];

const pricing = [
  {
    name: "Full Access Pass",
    note: "Ideal for Developers and Founding Teams.",
    price: "$20 / R550",
    cta: "Buy Now",
    bullets: [
      "Full access to 2-day conference",
      "Full access to 3-day hackathon stage",
      "Full access to expo floor",
      "Wrap party",
    ],
  },
  {
    name: "Community Manager Pass",
    note: "Ideal for Community Managers, DevRel pros, and Ambassadors.",
    price: "$250 / R4200",
    cta: "Buy Now",
    bullets: [
      "Full access to 3-day hackathon stage",
      "Community Manager Track (Workshops)",
      "Free coworking lounge",
      "Access to community manager events",
    ],
  },
  {
    name: "Hackathon / Travel Grant",
    note: "Students, developers, and founding teams.",
    price: "Free (Mahala)",
    cta: "Apply Now",
    bullets: ["Eligible for hackathon prizes", "Travel grant covers travel + stay"],
  },
];

const faqs = [
  { q: "Why the change?", a: "Event details can evolve—check the latest updates on tickets and applications." },
  { q: "When is the event?", a: site.datesLabel },
  { q: "What does it mean for my ticket or application?", a: "This clone has no payments backend; wire it to your provider." },
  { q: "What does this mean for the Travel Grant?", a: "Apply via Node Engine to be considered for the travel grant." },
];

function fakeCheckout(plan) {
  // placeholder interaction
  window.alert(`Checkout flow placeholder for: ${plan}`);
}
</script>

<style scoped>
.hero {
  padding-top: 80px;
  padding-bottom: 52px;
}

.hero__pill {
  width: fit-content;
}

.hero__sub {
  max-width: 740px;
  margin: 16px 0 0;
}

.hero__cta {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.sep {
  color: var(--border);
}

.mini {
  padding: 14px;
}

.price {
  font-family: var(--font-ui);
  color: var(--accent);
  margin: 14px 0 6px;
}

.bullets {
  margin: 0 0 16px;
  padding-left: 18px;
}

summary {
  cursor: pointer;
}

details[open] summary {
  color: var(--accent);
}

@media (min-width: 980px) {
  .grid--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 980px) {
  .grid--4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .grid--4 {
    grid-template-columns: 1fr;
  }
}
</style>

