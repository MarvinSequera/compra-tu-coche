import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  state: {
    isLoggedIn: null,
    userId: null
  },
  getters: {
    userStatus (state) {
      return state.isLoggedIn
    },
    getUserId (state) {
      return state.userId
    }
  },
  actions: {
    login (context, { username, password }) {
      axios.post('/auth/login', { username, password })
        .then(res => {
          context.commit('setUserLoggedIn')
          context.commit('setUserId', res.data)
          console.log(res.data)
        })
        .catch(err => console.log(err))
    },
    singup (context, { username, password, email, phone }) {
      axios.post('/auth/signup', { username, password, email, phone })
        .then(res => {
          context.commit('setUserLoggedIn')
          context.commit('setUserId', res.data)
        })
        .catch(err => console.log(err))
    },
    logout (context) {
      axios.get('/auth/logout')
        .then(res => context.commit('setUserLogout'))
        .catch(err => console.log(err))
    }
  },
  mutations: {
    setUserLoggedIn (state) {
      state.isLoggedIn = true
    },
    setUserLogout (state) {
      state.isLoggedIn = false
    },
    setUserId (state, userId) {
      state.userId = userId
    },
    cleanUserId (state) {
      state.userId = null
    }
  }
}
