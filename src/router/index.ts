import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      name: 'Quick Flip Text',
      path: '/quickFlipText',
      component: () => import('../features/QuickFlipText.vue'),
    },
    {
      name: 'Animate Borders Card',
      path: '/animateBordersCard',
      component: () => import('../features/AnimateBordersCard.vue'),
    },
    {
      name: 'Inner Glow Card',
      path: '/innerGlowCard',
      component: () => import('../features/InnerGlowCard.vue'),
    },
  ],
})

export default router
