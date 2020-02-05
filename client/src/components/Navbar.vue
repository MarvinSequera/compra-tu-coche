<template>
   <b-navbar toggleable="sm" type="dark" variant="dark">
     <router-link to="/">
      <img src='../../public/images/car.png' alt='car'>
     </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item as router-link to="/coches">Ingresar</b-nav-item>
        <b-nav-item as router-link to="/coches">Darse de Alta</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
