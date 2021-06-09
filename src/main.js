import Vue from 'vue';

// import element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import global index.scss
import '@/styles/index.scss'

import App from './App.vue';
import router from './router';
import store from './store';

import './permission' // permission control

// use element ui
Vue.use(ElementUI)

// vue config
Vue.config.productionTip = false;

// create vue
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
