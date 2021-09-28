import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerEnums } from './constants'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path:'/404',
    name:'notFind',
    component: () => import(/* webpackChunkName: "notFind" */ '../views/NotFind')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
].concat(routerEnums)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
