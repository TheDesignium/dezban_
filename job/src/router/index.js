import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import Submit from '../views/Submit'
import Account from '../views/Account'
import Details from '../views/Details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/submit',
    // name: 'Submit',
    // component: () => import(/* webpackChunkName: "about" */'../views/Submit.vue')
    component: Submit
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
