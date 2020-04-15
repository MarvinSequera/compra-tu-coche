<template>
  <div>
    <header class="hero">
      <h1>Encuentra tu proximo Coche</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    store () {
      return this.$store.dispatch('makers')
    }
  }
}
</script>

<style scope>
.hero {
  background-image: url(../../public/images/Greatest-driving-roads-Stelvio-Pass.jpg);
  background-size: contain;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
}
.hero h1 {
  text-align: center;
  padding-top: 180px;
  color: #f7f7f7;
}
</style>
