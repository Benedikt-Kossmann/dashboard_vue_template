import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const routes = [
  { path: '/',        component: Home  },
  { path: '/about',   component: () => import("@/pages/About.vue") },
  { path: '/login',   component: () => import("@/pages/Login.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
