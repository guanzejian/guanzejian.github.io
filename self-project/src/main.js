import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './router.js'
import iview from 'iview/dist/iview.js'
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter);
Vue.use(iview);

import "./assets/css/normalize.css"   // 引入初始化的css
import "./assets/css/ssbase.css"   // 引入初始化的css

const RouterConfig = {
  routes: Routers
};

var router =new VueRouter(RouterConfig);
Vue.config.productionTip = false

// 解决点击两次路由 报错的问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
