import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const BaseView = () => import(/* webpackChunkName: "base" */ '../views/BaseView.vue')
const GetView = () => import(/* webpackChunkName: "get" */ '../views/GetView.vue')
const PostView = () => import(/* webpackChunkName: "post" */ '../views/PostView.vue')
const PostHeader = () => import(/* webpackChunkName: "post" */ '../views/PostHeader.vue')
const ResponseView = () => import(/* webpackChunkName: "base" */ '../views/ResponseView.vue')
const ResponseHeaderAndData = () => import(/* webpackChunkName: "base" */ '../views/ResponseView.vue')
const ExceptionView = () => import(/* webpackChunkName: "base" */ '../views/ExceptionView.vue')

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
    path: '/responseHeaderAndData',
    name: 'responseHeaderAndData',
    component: ResponseHeaderAndData
  },
  {
    path: '/exception',
    name: 'exception',
    component: ExceptionView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
