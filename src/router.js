import Vue from 'vue'
import AppCars from './pages/AppCars.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/cars'},
    { path: '/proba', redirect: '/cars'},
    { path: '/cars', component: AppCars, name:'cars'}
  ]
  
 export const router = new VueRouter ({
    routes,
    mode: 'history'
  })