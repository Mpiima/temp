import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ApplyPage from "../pages/ApplyPage.vue";
import TravelPage from "../pages/TravelPage.vue";
import ApplyToSpeakPage from "../pages/ApplyToSpeakPage.vue";
import ApplyToSponsorPage from "../pages/ApplyToSponsorPage.vue";
import CommunityPartnersPage from "../pages/CommunityPartnersPage.vue";
import NodeEnginePage from "../pages/NodeEnginePage.vue";
import ThankYouPage from "../pages/ThankYouPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/apply", name: "apply", component: ApplyPage },
    { path: "/travel", name: "travel", component: TravelPage },
    { path: "/apply-to-speak", name: "apply-to-speak", component: ApplyToSpeakPage },
    {
      path: "/apply-to-sponsor",
      name: "apply-to-sponsor",
      component: ApplyToSponsorPage,
    },
    {
      path: "/community-partners",
      name: "community-partners",
      component: CommunityPartnersPage,
    },
    { path: "/node-engine", name: "node-engine", component: NodeEnginePage },
    { path: "/thank-you", name: "thank-you", component: ThankYouPage },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export default router;

