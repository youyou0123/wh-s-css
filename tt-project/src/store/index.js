import Vue from 'vue'
import Vuex from 'vuex'
import { getShopSkus} from '@/server/api'
Vue.use(Vuex);
let shopCarListLocalStorage = JSON.parse(localStorage.getItem('miaov-shop')) || {};
let shopCarListStorage = shopCarListLocalStorage.shopCarList || [];
// [{sku_id,buyNumber}]
let store = new Vuex.Store({
  state:{
    shopCarList:[]  // [{},{},{}]
  },
  getters: {
    // 统计总数和总钱数
    total(state){
      return state.shopCarList.reduce((item1,item2) => {
        return {
          totalMoney: item1.totalMoney + item2.price * item2.buyNumber,
          totalBuyNumber: item1.totalBuyNumber + item2.buyNumber
        }
      },{
        totalMoney: 0,
        totalBuyNumber: 0
      })
    }
  },
  mutations:{
    addShopCarList(state,payload){ // {shop: {}}  商品的信息
      let item = state.shopCarList.find((item) => item.sku_id === payload.shop.sku_id)
      if(item){
        ++item.buyNumber
      }else{
        // 变成响应的
        Vue.set(payload.shop,'buyNumber',1)
        state.shopCarList.push(payload.shop);
      }
    },
    replaceShopList(state,playload){  // {list:[]}
      state.shopCarList = playload.list;
    }
  },
  actions:{
    getShopCarListInfoAction(store,playload){ //{ids:',,'}
      return getShopSkus(playload).then(({data}) => {

        let list = data.data.list.map((item) => {
          // 后端给的数据中没有buyNumber，所以要根据后端给的数据从localstorage中找到数据
          // 拿到buyNumber
          let option = shopCarListStorage.find(abc => abc.sku_id == item.id)
          return {
            ...item.shop_info,
            sku_id: item.id,
            price: item.price,
            buyNumber: option.buyNumber
          }
        })
        store.commit('replaceShopList',{
          list: list
        })
      });
    }
  }
})

store.watch((state) => {
  return {
    shopCarList: state.shopCarList
  }
},(newValue) => {
  // 把值存在localStorage中
  localStorage.setItem('miaov-shop', JSON.stringify(newValue))
},{
  deep: true
});



export default store;