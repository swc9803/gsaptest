import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Test from '@/pages/Test.vue'
import Test2 from '@/pages/Test2.vue'
import Test3 from '@/pages/Test3.vue'
import Test4 from '@/pages/Test4.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/test3',
    name: 'Test3',
    component: Test3
  },
  {
    path: '/test4',
    name: 'Test4',
    component: Test4
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
