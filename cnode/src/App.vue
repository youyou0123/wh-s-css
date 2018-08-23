<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

//import {getTopics} from './server'
import router from './router'
export default {
  name: 'App',
  router,
  created() {

  },
  methods:{
    selectHandle(name){
      console.log('点击l',name)
    }
  }
}
</script>

<style>


</style>
