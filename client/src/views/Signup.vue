<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col sm="6">
          <b-form class="form" @reset='onReset' @submit.prevent='onSubmit'>
            <b-form-group
            id="username-group"
            label="Nombre de Usuario"
            label-for="username"
            description="El nombre que verán los otros usuarios"
            >
              <b-form-input
              input="username"
              v-model="form.username"
              required
              placeholder="Nombre"
              ></b-form-input>
            </b-form-group>
            <b-form-group
            id="password-group"
            label="Clave"
            label-for="password"
            description="Una buena clave no se olvida :)"
            >
              <b-form-input
              input="password"
              v-model="form.password"
              type="password"
              required
              placeholder="Clave"
              ></b-form-input>
            </b-form-group>
            <b-form-group
            id="email-group"
            label="Email"
            label-for="email"
            description="No compartiremos tu correo."
            >
              <b-form-input
              input="email"
              v-model="form.email"
              type="email"
              required
              placeholder="email@email.com"
              ></b-form-input>
            </b-form-group>
             <b-form-group
            id="phone-group"
            label="Teléfono"
            label-for="phone"
            description="Teléfono de contacto"
            >
              <b-form-input
              input="phone"
              v-model="form.phone"
              type="number"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    onReset (evt) {
      evt.preventDefault()
      this.form.username = ''
      this.form.password = ''
      this.form.email = ''
      this.form.phone = ''
    },
    onSubmit (evt) {
      evt.preventDefault()
      let username = this.form.username
      let password = this.form.password
      let email = this.form.email
      let phone = this.form.phone
      this.$store.dispatch('singup', { username, password, email, phone })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.form{
  margin-top:60px;
}
.form button{
  margin: 0 5px;
  padding: 10px 15px;
}
</style>
