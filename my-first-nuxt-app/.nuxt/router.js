import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _44bd5560 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _f01575d0 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _20c08e4d = () => interopDefault(import('..\\pages\\users\\register.vue' /* webpackChunkName: "pages_users_register" */))
const _12f8e68b = () => interopDefault(import('..\\pages\\users\\_userid.vue' /* webpackChunkName: "pages_users__userid" */))
const _6bc311f4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _44bd5560,
    name: "test"
  }, {
    path: "/users",
    component: _f01575d0,
    name: "users"
  }, {
    path: "/users/register",
    component: _20c08e4d,
    name: "users-register"
  }, {
    path: "/users/:userid",
    component: _12f8e68b,
    name: "users-userid"
  }, {
    path: "/",
    component: _6bc311f4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
