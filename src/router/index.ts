import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/homeView.vue'
import CatalogoView from '@/views/catalogoView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/catalogo', component: CatalogoView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
