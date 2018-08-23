import Vue from 'vue'
import Router from 'vue-router'

import List from '@/views/list/list'
import Detail from '@/views/detail/detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/list'
    },
    {
      path: '/list/:tab?',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
