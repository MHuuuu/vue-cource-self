import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'home',
    //别名
    alias: '/home_page',
    component: Home,
    //函数代参
    props: route => ({
      food: route.query.food
    })

    /* beforeEnter: (to, from, next) => {
      if (from.name === 'about') alert('来自about页面')
      next()
    } */
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
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: 'about'
    }
  },
  {
    //动态路由
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    //让内部的参数接受外层root的params
    props: true
  },
  {
    //嵌套路由
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [{
      path: 'child',
      component: () => import('@/views/child.vue'),
    }]
  },
  {
    //命名视图
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    //重定向
    path: '/main',
    redirect: to => '/'
    //redirect:'/'
    /* redirect:{
      name:'home'
    } */
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')

  }

]

//路由列表
