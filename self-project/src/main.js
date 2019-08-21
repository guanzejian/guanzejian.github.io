import Vue from 'vue'
import App from './App.vue'

import "./assets/normalize.css"   // 引入初始化的css
import 'iview/dist/styles/iview.css';


import { Button,Table,Layout,Header,Sider,Content,Footer,Menu,MenuItem,Icon,Tooltip } from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Layout',Layout);
Vue.component('Header',Header);
Vue.component('Sider',Sider);
Vue.component('Content',Content);
Vue.component('Footer',Footer);
Vue.component('Menu',Menu);
Vue.component('MenuItem',MenuItem);
Vue.component('Icon',Icon);
Vue.component('Tooltip',Tooltip);





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
