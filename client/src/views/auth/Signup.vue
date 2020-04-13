<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col sm="6">
          <b-form class="form" @reset="onReset" @submit.prevent="onSubmit">
            <b-form-group
              id="username-group"
              label="Nombre de Usuario"
              label-for="username"
              description="El nombre que verán los otros usuarios"
            >
              <b-form-input
                input="username"
                v-model="$v.form.username.$model"
                required
                placeholder="Nombre"
                :state="validateState('username')"
                aria-describedby="check-username"
                trim
              ></b-form-input>
              <b-form-invalid-feedback id="check-username">Debe ser por lo menos de 3 caracteres</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              id="password-group"
              label="Clave"
              label-for="password"
              description="Una buena clave no se olvida :)"
            >
              <b-form-input
                input="password"
                v-model="$v.form.password.$model"
                type="password"
                required
                placeholder="Clave"
                :state="validateState('password')"
                aria-describedby="check-password"
                trim
              ></b-form-input>
              <b-form-invalid-feedback
                id="check-password"
              >Por favor la clave debe terner minimo 6 caracteres</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              id="email-group"
              label="Email"
              label-for="email"
              description="No compartiremos tu correo."
            >
              <b-form-input
                input="email"
                v-model="$v.form.email.$model"
                type="email"
                required
                placeholder="email@email.com"
                :state="validateState('email')"
                aria-describedby="check-email"
                trim
              ></b-form-input>
              <b-form-invalid-feedback id="check-email">Por favor ingresa un email valido</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              id="phone-group"
              label="Teléfono"
              label-for="phone"
              description="Teléfono de contacto"
            >
              <b-form-input input="phone" v-model="form.phone" type="number" trim></b-form-input>
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
import { validationMixin } from 'vuelidate'
import { email, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
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
  validations: {
    form: {
      username: {
        minLength: minLength(3)
      },
      password: {
        minLength: minLength(6)
      },
      email: {
        email
      }
    }
  },
  methods: {
    validateState (name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
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
.form {
  margin-top: 60px;
}
.form button {
  margin: 0 5px;
  padding: 10px 15px;
}
</style>
