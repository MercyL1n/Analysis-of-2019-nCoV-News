// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/common.css'
import zoom from './assets/scripts/tool/zoom'
import VueParticles from 'vue-particles'  
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueParticles) 

zoom()
window.addEventListener('resize', zoom)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
