import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from "@/views/Add";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
   path: '/employees/add',
    name: 'Add',
    component: Add
  },

  {
    path: '/employees',
    name: 'Employees',
    component: () => import('../views/Employees')
  },

  {
    path: '/employees/:index/edit',
    name: 'Edit',
    component: () => import('../views/Edit')
  },
  { path: '/:pathMatch(.*)*',
    component: () => import('../views/404')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
