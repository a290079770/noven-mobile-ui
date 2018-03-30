import Vue from 'vue'
import App from './App'
import router from './router'

router.go = function (number) { 
　　this.isBack = true
　　window.history.go(number);
}

// import 'lib-flexible'

//移动端快速点击事件
// import FastClick from 'fastclick'
// FastClick.attach(document.body)
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';


//引入全局公共方法
import common from './common'
Vue.use(common);


import axios from './http.js'
Vue.prototype.$http = axios;


//引入页面缓存组件
import Navigation from 'vue-navigation'
Vue.use(Navigation, {router})


//这里是配置的从vux引入的全局组件
// import { AlertPlugin, ToastPlugin ,Swiper  } from 'vux'

// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin,{position: 'middle'})
// Vue.use(Swiper)

import { Swipe, SwipeItem,Tabbar, TabItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


//注册公司内部公共组件
import WJComponents from '@/components/common/index.js'
Vue.use(WJComponents);


let Base64 = require('js-base64').Base64;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
