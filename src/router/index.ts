// createRouter: 创建路由实例
// createWebHistory: 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Layout = () => import('@/views/Layout/index.vue');
const Login = () => import('@/views/Login/index.vue');

const router = createRouter({
  history: createWebHistory(),
  // 配置path和component对应关系的位置
  routes: [
    {
      name: 'Layout',
      path: '/',
      component: Layout,
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
});

export default router
