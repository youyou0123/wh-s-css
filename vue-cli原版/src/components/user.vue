<template>
  <div>
    <router-link to="user/1">1</router-link>
    <router-link to="user/2">2</router-link>
    <p>姓名:{{shujv.name}}</p>
    <p>年龄:{{shujv.age}}</p>
  </div>
</template>
<script>
let list = [
  {
    id: 1,
    name: 'fff',
    age: 321
  },{
    id: 2,
    name: 'fdsdf',
    age: 43
  }
]
export default {
    data() {
      return {
        shujv: {
            name: '***',
            age: '***'
        }
    }
  },
  watch: {
    $route: {
    handler() {

        let id = this.$route.params.abc;

        if (id) {
          let item = list.find(item=>item.id == id)
          this.shujv = item;
        }
    },
    immediate:true
  }
  }

}
</script>

