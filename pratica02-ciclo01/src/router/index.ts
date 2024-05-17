import {  createRouter, createWebHistory } from 'vue-router'

import TodoList from '../pages/to-do-list.vue'

const routes = [
  { path: '/', name: 'home',component: TodoList },
]

 const router = createRouter({
  history: createWebHistory(),
  routes,

})

export default router