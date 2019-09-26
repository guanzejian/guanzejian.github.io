import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var token = JSON.parse( localStorage.getItem("token") || '[]');
export default new Vuex.Store({
  state: {
    token: 'TOKEN-TRUE'
  },
  mutations:{
    change(state,n){
      state.token+= n;
      localStorage.setItem("token",JSON.stringify(state.token))
    }

  },
  actions:{},
  getters:{}//相当于 computed 属性
})

