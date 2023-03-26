import { createRouter, createWebHashHistory } from 'vue-router'
import ExampleView from '@/views/ExampleView.vue'

const routes = [
  {
    path: '/',
    name: 'Example',
    component: ExampleView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
