import { createRouter, createWebHistory } from 'vue-router'

// ✅ Ensure these paths point to actual files in src/views/
const HomeView = () => import('../views/HomeView.vue')
const About = () => import('../views/About.vue')
const Projects = () => import('../views/Projects.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
