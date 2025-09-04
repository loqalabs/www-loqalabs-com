import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/loqa',
      name: 'loqa',
      component: () => import('../views/LoqaPage.vue')
    },
    {
      path: '/use-cases',
      name: 'use-cases',
      component: () => import('../views/UseCasesPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/docs',
      name: 'docs',
      beforeEnter() {
        window.location.href = 'https://loqalabs.github.io/loqa/'
      }
    }
  ]
})

export default router