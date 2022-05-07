import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const BaseView = () => import(/* webpackChunkName: "base" */ '../views/BaseView.vue')
const GetView = () => import(/* webpackChunkName: "get" */ '../views/GetView.vue')
const PostView = () => import(/* webpackChunkName: "post" */ '../views/PostView.vue')
const PostHeader = () => import(/* webpackChunkName: "post" */ '../views/PostHeader.vue')
const ResponseView = () => import(/* webpackChunkName: "base" */ '../views/ResponseView.vue')
const ErrorView = () => import(/* webpackChunkName: "base" */ '../views/ErrorView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'base',
    component: BaseView
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
  },
  {
    path: '/response',
    name: 'response',
    component: ResponseView
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
