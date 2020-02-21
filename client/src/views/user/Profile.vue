<template>
  <div>
    <b-container>
      <h1>Bienvenido {{getUserId.username}}</h1>
      <b-row>
      <b-col sm='4'>
        <b-form class="form">
          <b-form-group
            id="email-group"
            label="Email"
            label-for="email"
            >
              <b-form-input
              input="email"
              type="email"
              v-model="form.email"
              required
              placeholder="email@email.com"
              ></b-form-input>
            </b-form-group>
            <b-form-group
            id="phone-group"
            label="Teléfono"
            label-for="phone"
            >
              <b-form-input
              input="phone"
              v-model="form.phone"
              type="number"
              ></b-form-input>
            </b-form-group>
        </b-form>
      </b-col>
      <b-col sm='4'>
        <b-card
        title="Publica tu Coche"
        img-src="https://res.cloudinary.com/marvinsequera/image/upload/v1582206384/compraTuCoche/camara_te6kmo.jpg"
        img-alt="Camara"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
          <b-card-text>

          </b-card-text>
          <b-button as router-link to="/addCar">Publica</b-button>
        </b-card>
      </b-col>
      <b-col sm='4'>
        <b-card
        title="Tus Favoritos"
        img-src="https://res.cloudinary.com/marvinsequera/image/upload/v1582206392/compraTuCoche/porsche_prh9em.jpg"
        img-alt="Car-Favoritos"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
          <b-card-text>

          </b-card-text>
          <b-button as router-link to="/favorites">Favoritos</b-button>
        </b-card>
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => {
    return {
      form: {
        email: '',
        phone: ''
      }
    }
  },
  computed: {
    getUserId () {
      return this.$store.getters.getUserId
    }
  }
}
</script>
