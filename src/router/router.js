import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
import Table from '@/views/table.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'table',
        component: Table
      },
      {
        path: 'folder_tree',
        component: () => import('@/views/folder-tree/folder-tree.vue')
      }
    ]
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
    path: '/upload',
    name: 'upload',
    component: () => import('@/views/upload.vue')
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
    path: '/render_page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form.vue')
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
