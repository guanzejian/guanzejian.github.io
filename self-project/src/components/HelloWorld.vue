<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <Button @click="gologin">去登录</Button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      msg:"welcome! "
    }
  },
  methods: {
    gologin(){
      this.$router.push({name: 'login',params:{ isLogin: false }})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
