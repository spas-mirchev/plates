import Vue from 'vue'
import Router from 'vue-router'
import Collections from '@/components/Collections'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Login from '@/components/Login'
import Horeca from '@/components/Horeca'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/Collections',
      name: 'Collections',
      component: Collections
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Horeca',
      name: 'Horeca',
      component: Horeca
    }
    // {
    //   path: '/Tech',
    //   name: 'Tech',
    //   component: Tech
    // }
  ]
})
