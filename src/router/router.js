import Home from '@/views/Home.vue'
export default [{
  path: '/',
  alias: '/home_page',
  name: 'home',
  component: Home,
  // 函数代参
  props: route => ({
    food: route.query.food
  }),
  beforeEnter: (to, from, next) => {
    // if (from.name === 'about') alert('这是从about来的')
    // else alert('这不是从about来的')
    next()
  }
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login.vue')
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  props: {
    food: 'banana'
  },
  meta: {
    title: '关于'
  }
},
{
  // 动态路由
  path: '/argu/:name',
  name: 'argu',
  component: () => import('@/views/argu.vue'),
  // 让内部的参数接受外层root的params
  props: true
},
{
  path: '/count-to',
  name: 'count_to',
  component: () => import('@/views/count-to.vue')
},
{
  path: '/split-pane',
  name: 'split-pane',
  component: () => import('@/views/split-pane.vue')
},
{
  // 嵌套路由
  path: '/parent',
  name: 'parent',
  component: () => import('@/views/parent.vue'),
  children: [{
    path: 'child',
    component: () => import('@/views/child.vue')
  }]
},
{
  // 命名视图
  path: '/named_view',
  components: {
    default: () => import('@/views/child.vue'),
    email: () => import('@/views/email.vue'),
    tel: () => import('@/views/tel.vue')
  }
},
{
  // 重定向
  path: '/main',
  redirect: to => '/'
},
{
  path: '/store',
  component: () => import('@/views/store.vue')
},
{
  path: '*',
  component: () => import('@/views/error_404.vue')
}
]
