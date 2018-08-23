import Vue from 'vue'
import Router from 'vue-router'

import ShopList from '@/views/shop_list/shopList'
import Car from '@/views/car/car'
import Detail from '@/views/detail/detail'
import Abc from '@/components/abc'
import NavSub from '@/components/header/NavSub'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/shop_list'
    },
    {
      path: '/shop_list',
      name: 'ShopList',
      components: {
        nav: NavSub,
        default: ShopList
      }
    },
    {
      path: '/car',
      name: 'Car',
      components: {
        // nav: NavSub,
        //miaov: Abc,  // 在router-view中起的name值
        default: Car  // 固定的默认的
      }
    },
    {
      path: '/item/:sku_id',
      name: 'Item',
      component: Detail
    },
  ]
})
