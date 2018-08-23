<template>
  <div class="nav-sub">
    <div class="nav-sub-wrapper">
      <div class="container">
        <ul class="nav-list">
          <router-link 
            v-for="item in navConfig"
            :key="item.id"
            :to="{path:'/shop_list',query:{id:item.id}}"
            tag='li'
            :class="{active: currentId == item.id}"
          >
            <a>{{item.title}}</a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import SmallCar from './smallCar'
  let navConfig = [
    {
      title:'全部商品',
      id: 62
    },
    {
      title:'官方配件',
      id: 60
    },
    {
      title:'品牌周边',
      id: 69
    },
    {
      title:'第三方商品',
      id: 61
    }
  ]
  export default {
    data(){
      return {
        navConfig,
        currentId: 62
      }
    },
     watch:{
      $route:{
        handler(){
          let id = this.$route.query.id;
          this.currentId = id;
        },
        immediate: true
      }
    }
  }

</script>
