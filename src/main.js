import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

new Vue({
  // Vue 使います
  router, // Vue Router 使います
  store, // Vuex ストア使います
  render: h => h(App), // App コンポーネント埋め込みます
}).$mount('#app') // index.html の <div id="app"></div> に Vue を適用します
