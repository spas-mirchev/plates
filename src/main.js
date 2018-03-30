// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bulma/css/bulma.css';
import VeeValidate from 'vee-validate';
import 'itemsjs/dist/itemsjs.js';
import router from './router'

Vue.use(VeeValidate);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
