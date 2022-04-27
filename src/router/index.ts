import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
const GetView = () => import(/* webpackChunkName: "get" */ '../views/GetView.vue')
const PostView = () => import(/* webpackChunkName: "post" */ '../views/PostView.vue')
const PostHeader = () => import(/* webpackChunkName: "post" */ '../views/PostHeader.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/get',
    name: 'get',
    component: GetView
  },
  {
    path: '/post',
    name: 'post',
    component: PostView
  },
  {
    path: '/postHeader',
    name: 'postHeader',
    component: PostHeader
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
