import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b3f8d80 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _64336e10 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _4af27e6d = () => interopDefault(import('..\\pages\\users\\register.vue' /* webpackChunkName: "pages_users_register" */))
const _be8f1b2a = () => interopDefault(import('..\\pages\\users\\_userid.vue' /* webpackChunkName: "pages_users__userid" */))
const _fb06abd8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _3b3f8d80,
    name: "test"
  }, {
    path: "/users",
    component: _64336e10,
    name: "users"
  }, {
    path: "/users/register",
    component: _4af27e6d,
    name: "users-register"
  }, {
    path: "/users/:userid",
    component: _be8f1b2a,
    name: "users-userid"
  }, {
    path: "/",
    component: _fb06abd8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
