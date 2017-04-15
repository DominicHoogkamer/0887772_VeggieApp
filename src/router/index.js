import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Food from '@/components/food/food'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/food',
      component: Food
    },
  ]
})
