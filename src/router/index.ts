import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const HomeView = () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
const AboutView = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
