// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '#/css/reset.css' // 引入重置样式
import 'element-ui/lib/theme-chalk/index.css' // 引入elementUI css文件
import Vue from 'vue'
import App from './App'
import router from './router'                // 引入路由组件
import store from  '#/js/store.js'            // 引入vuex
import ElementUI from 'element-ui'            // 引入elementUI

Vue.use(ElementUI);                      // 注册elementUI
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
