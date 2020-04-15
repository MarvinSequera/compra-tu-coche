<template>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <router-link to="/">
      <img src="../../public/images/car.png" alt="car" />
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" v-if="isLoggedIn">
        <b-nav-item as router-link to="/profile">Perfil</b-nav-item>
        <b-nav-item @click="logout">Salir</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-else>
        <b-nav-item as router-link to="/login">Ingresar</b-nav-item>
        <b-nav-item as router-link to="/signup">Darse de Alta</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isLoggedIn () {
      return this.$store.getters.userStatus
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    }
  }
}
</script>
