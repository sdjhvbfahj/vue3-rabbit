// createRouter: 创建路由实例
// createWebHistory: 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Layout = () => import('@/views/Layout/index.vue');
const Login = () => import('@/views/Login/index.vue');
const Home = () => import('@/views/Home/index.vue');
const Category = () => import('@/views/Category/index.vue');
const SubCategory = () => import('@/views/SubCategory/index.vue');

const router = createRouter({
  history: createWebHistory(),
  // 配置path和component对应关系的位置
  routes: [
    // 首页页面路由
    {
      name: 'Layout',
      path: '/',
      component: Layout,
      children: [
        {
          name: 'Home',
          path: '',
          component: Home
        },
        // 分类商品页面
        {
          name: 'Category',
          path: '/category/:id',
          component: Category
        },
        // 二级分类商品页面
        {
          name: 'SubCategory',
          path: '/category/sub/:id',
          component: SubCategory
        }
      ]
    },
    // 登陆页面路由
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ],
  // 定制路由滚动行为
  scrollBehavior() {
    return {
      // 每次路由跳转都会回到顶部
      top: 0
    }
  }
});

export default router
