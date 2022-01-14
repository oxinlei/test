// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/directives/drag.js'
Vue.config.productionTip = false

import '@/styles/index.scss' // global css
import '@/styles/iconfont.css' // icon css


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
