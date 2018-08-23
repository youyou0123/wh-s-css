<template>
  <div id="app">

    <router-link  to="/about">about</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/user">user</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'


import router from './router/router'


export default {
  name: 'App',
  router: router,
  //两个参数是上次路由和跳转路由的实例信息
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
