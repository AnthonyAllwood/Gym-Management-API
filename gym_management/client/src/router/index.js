import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Equipment from '@/views/Equipment.vue'
import About from '@/views/About.vue'
import Signup from '@/views/Signup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/equipment",
      name: "equipment",
      component: Equipment
    }, 
    {
      path: "/about",
      name: "about",
      component: About
    }, 
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ]
})
