// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'; 
Vue.prototype.$axios = axios

Vue.config.productionTip = false
import { Table } from 'ant-design-vue';
Vue.use(Table);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
