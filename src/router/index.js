import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'

import FoodList from '@/components/food/FoodList'
import Food from '@/components/food/Food'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/products',
      component: FoodList
    },
    {
      path: '/products/product/:id',
      component: Food
    }
  ]
})
