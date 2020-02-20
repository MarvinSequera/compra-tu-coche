import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Components
import Navbar from './components/Navbar.vue'
// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Component
Vue.component('Navbar', Navbar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
