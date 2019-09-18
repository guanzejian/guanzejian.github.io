<template>
  <div id="app">
    <Login v-show="(path === '/login')"></Login>
    <Index v-show="!(path === '/login')"></Index>
  </div>
</template>

<script>
import Index from './components/index'
import Login from './components/login.vue'
export default {
  name: 'app',
  data() {
    return {
      path:''
    }
  },
  components: {
    Index,
    Login
  },
  // mounted() {
  //   console.log(this.$route.path)
  //   this.path = this.$route.path
  // },
  watch: {
    $route(to,from){
      // console.log(to.path)
      this.path = to.path
    }
  },
}
</script>

<style>
#app {
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
