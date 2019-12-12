import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard.vue'
import UserProfile from '../views/user-profile.vue'
import CreateForm from '../views/create-form.vue'
// import VueCharts from 'chart.js'
import VueCharts from 'vue-chartjs'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

Vue.use(VueCharts)
Vue.use(VueRouter)

// const routes = []

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      name:'dashboard',
      component: Dashboard
    },
    {
      path:'/user-profile',
      name:'user-profile',
      component: UserProfile
    },
    {
      path:'/create-form',
      name:'create-form',
      component: CreateForm
    }
  ]
})

export default router
