import './assets/stylesheets/app.css';
import './assets/stylesheets/tutu.scss';

import Vue from 'vue';
import App from './App.vue';
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { 'App': App },
  template: '<App/>'
});