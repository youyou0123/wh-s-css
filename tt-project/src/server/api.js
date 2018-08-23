import axios from 'axios'

let instace = axios.create({
  baseURL: 'http://localhost:5001/api'
});

export function getShopList(params) {
  let defaults = {
    page_size: 20,
    page: 1,
    id: 62,
    sort: "sort"
  }
  Object.assign(defaults, params);
  return instace.get('/shop_list', { params: defaults })
}

// 拿到商品的详细信息
export function getShopSkus(params) {
  let defaults = {
   ids:''  //
  }
  Object.assign(defaults, params);
  return instace.get('/shop_skus', { params: defaults })
}


// 作为vue的插件
export default {
  install(Vue){
    Vue.prototype.$api = {
      getShopList,
      getShopSkus
    }
  }
}
