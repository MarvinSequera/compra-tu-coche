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
             >
              <b-form-input
              input="password"
              v-model="form.password"
              type="password"
              required
              placeholder="Clave"
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
// import authService from '../Service/authService.js'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    onReset (evt) {
      this.form.username = ''
      this.form.password = ''
    },
    onSubmit (evt) {
      this.axios.post('/auth/login', { username: this.form.username, password: this.form.password })
        .then(res => console.log(res))
        .catch(err => console.log(err))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.form{
  margin-top:120px;
}
.form button{
  margin: 0 5px;
  padding: 10px 15px;
}
</style>
