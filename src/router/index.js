import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Test from '@/pages/Test.vue'
import Test2 from '@/pages/Test2.vue'
import Test3 from '@/pages/Test3.vue'
import Test4 from '@/pages/Test4.vue'
import Test5 from '@/pages/Test5.vue'
import Test6 from '@/pages/Test6.vue'
import Test7 from '@/pages/Test7.vue'

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
  },
  {
    path: '/test5',
    name: 'Test5',
    component: Test5
  },
  {
    path: '/test6',
    name: 'Test6',
    component: Test6
  },
  {
    path: '/test7',
    name: 'Test7',
    component: Test7
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
