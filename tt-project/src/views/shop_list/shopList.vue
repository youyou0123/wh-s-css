<template>
  <div class="sku-box store-content">
    <div class="sort-option" style="display: none;">
      <ul class="line clear">
        <li><a href="javascript:;" class="active">综合排序</a></li>
        <li><a href="javascript:;" class="">销量排序</a></li>
        <li><a href="javascript:;" class="">价格低到高</a></li>
        <li><a href="javascript:;" class="">价格高到低</a></li>
      </ul>
    </div>
    <div class="gray-box">
      <div class="item-box">
        <shop-item 
          v-for="item in list" 
          :key="item.id"
          :option="item"
        ></shop-item>
      </div>
    </div>
  </div>
</template>
<script>
  import ShopItem from './shopItem.vue'
  export default {
    components: {ShopItem},
    data(){
      return {
        list:[]
      }
    },
    watch:{
      $route: 'getData'
    },
    methods:{
      async getData(){
        // 拿到query中的id，请求对用的数据
        let id = this.$route.query.id;
        if(!id){
          id = 62;
          this.$router.push({query:{id}})
        }
        let {data} = await this.$api.getShopList({id});

        this.list = data.data.list;
      }
    },
    created() {
      this.getData();
    },
  }
</script>
<style>
  @import url('./goodsList.css');
</style>

