<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col sm="6">
          <b-form class="form" @reset='onReset' @submit='onSubmit'>
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
      evt.preventDefault()
      this.form.username = ''
      this.form.password = ''
    },
    onSubmit (evt) {
      evt.preventDefault()
      console.log('Funciona')
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
