var App = Vue.component('App', {
  template: '<p>This is a todo</p>'
});

var app = new Vue({
  el: '#app',
  components: { 'App': App },
  template: '<App/>'
});