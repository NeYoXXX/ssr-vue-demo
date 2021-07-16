import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import About from '../view/About.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component:  Home },
      { path: '/about', component:  About },
    ]
  })
}