import Vue from 'vue'
import Router from 'vue-router'

import Auth from '../components/auth/Auth.vue';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';

import Dash from '../components/dash/Dash.vue';
import Newsfeed from '../components/dash/Newsfeed.vue';



Vue.use(Router)

export default new Router({
  routes: [
    {
        path: "/auth",
        component: Auth,
        redirect: '/auth/login',
        children: [
          {
            path: "login",
            component: Login
          },
          {
            path: "register",
            component: Register          
          }
        ]
    },
    {
          path: "/",
          component: Dash,
          redirect: '/newsfeed',
          children: [
            {
              path: "newsfeed",
              component: Newsfeed
            }
          ]
      },
    
  ]
})
