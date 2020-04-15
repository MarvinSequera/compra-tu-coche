import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import login from './modules/login'
import maker from './modules/maker'
// Axios
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:3000/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login, maker
  },
  getters: {
  }
})
