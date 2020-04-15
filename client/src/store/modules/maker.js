import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  state: {
    makers: []
  },
  getters: {
    makersName (state) {
      return state.makers
    }
  },
  actions: {
    makers (context) {
      axios.get('')
        .then(res => context.commit('setMakers', res.data))
        .catch(err => console.log('error al recuperar los fabricantes', err))
    }
  },
  mutations: {
    setMakers (state, makers) {
      state.makers = makers
    }
  }
}
