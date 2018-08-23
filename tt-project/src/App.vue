<template>
  <div id="app">
    <custom-header></custom-header>
    <div id="main">
      <router-view name="miaov"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/header/header'
export default {
  name: 'App',
  components:{CustomHeader}
}
</script>

<style>

</style>
