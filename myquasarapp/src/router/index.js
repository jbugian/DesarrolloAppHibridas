import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from './store'
import Axios from 'axios'

import routes from './routes'

Vue.use(VueRouter)

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    mode: 'history',
    routes,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    console.log('TO!!', to)
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('user') == null) {
        next({
          path: '/login',
          params: { nextUrl: to.fullPath }
        })
      } else {
        let user = JSON.parse(localStorage.getItem('user'))
        if (to.matched.some(record => record.meta.is_admin)) {
          if (user.is_admin == 1) {
            next()
          } else {
            next({ name: 'userboard' })
          }
        } else {
          next()
        }
      }
    } else if (to.matched.some(record => record.meta.guest)) {
      if (localStorage.getItem('user') == null) {
        next()
      }
      else {
        next({ name: 'userboard' })
      }
    } else {
      next()
    }
  })

  return Router
}
