import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/util'

Vue.use(Router)

/* export default new Router({
  //history=无刷新
  mode:'history',
  routes
}) */
const router = new Router({
  routes
})

const HAS_LOGINED = true

//前置路由守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({
      name: 'login'
    })
  } else {
    if (HAS_LOGINED) next({
      name: 'home'
    })
    else next()
  }
})

router.beforeResolve((to, from, next) => {
  //
  next();
})
//导航被确认后,后置路由钩子
router.afterEach((to, from) => {
  //login=false
})

export default router

//路由实例
