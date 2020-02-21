import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/user/Profile.vue'
import Carslist from '../views/CarsList.vue'
import CarDetail from '../views/CarDetail.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import AddCar from '../views/user/AddCar.vue'
import Favorites from '../views/user/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/list',
    name: 'Carslist',
    component: Carslist
  },
  {
    path: '/car/:id',
    name: 'CarDetail',
    component: CarDetail
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/addCar',
    name: 'addCar',
    component: AddCar
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
