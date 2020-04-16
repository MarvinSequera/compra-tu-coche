<template>
  <b-container>
    <h1>Publica tu Coche</h1>
    <b-row align-h="center">
      <b-col sm="6">
        <b-form class="form"  @reset="onReset" @submit.prevent="onSubmit">
            <b-form-group id="input-maker">
              <b-form-select v-model="form.selected" :options="$store.state.maker.makers">
                <template v-slot:first>
                  <b-form-select-option value="null" disabled>Elige una Opción</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group id="input-model">
              <b-form-input id="model" v-model="form.model" placeholder="Modelo" require trim></b-form-input>
            </b-form-group>
            <b-form-group id="input-year">
              <b-form-input id="year" v-model="form.year" placeholder="Año" type="number" require trim></b-form-input>
            </b-form-group>
            <b-form-group id="input-km">
              <b-form-input id="kilometers" v-model="form.kilometers" placeholder="KM" type="number" require trim></b-form-input>
            </b-form-group>
            <b-form-group id="input-hp">
              <b-form-input id="hp" v-model="form.hp" placeholder="Potencia" type="number" require trim></b-form-input>
            </b-form-group>
            <b-form-group id="input-color">
              <b-form-input id="color" v-model="form.color" placeholder="Color" require trim></b-form-input>
            </b-form-group>
            <b-form-group id="input-price">
              <b-form-input id="price" v-model="form.price" placeholder="Precio" type="number" require trim></b-form-input>
            </b-form-group>
            <b-form-group id="input-address">
              <b-form-input id="address" v-model="form.address" placeholder="Direccion" require trim></b-form-input>
            </b-form-group>
            <b-form-file
            v-model="form.pictures"
            placeholder="Elige o Suelta una imagen aquí"
            drop-placeholder="Sueltala aquí"
            accept="image/*"
            class="text-left"
            multiple>
              <template slot="file-name" slot-scope="{ names }">
                <b-badge variant="dark">{{ names[0] }}</b-badge>
                <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                  + {{ names.length - 1 }} Archivos más
                </b-badge>
              </template>
            </b-form-file>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'AddCar',
  data () {
    return {
      form: {
        selected: null,
        model: '',
        year: null,
        kilometers: null,
        hp: null,
        color: '',
        price: null,
        address: '',
        pictures: []
      }
    }
  },
  components: {
    // 'progress-bar': require('./parts/vue.progress-bar')
  },
  methods: {
    onReset (evt) {
      this.form.selected = null
      this.form.model = ''
      this.form.year = null
      this.form.kilometers = null
      this.form.hp = null
      this.form.color = ''
      this.form.price = null
      this.form.address = ''
    },
    onSubmit (evt) {
      let username = this.form.username
      let password = this.form.password
      this.$store.dispatch('login', { username, password })
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.form button {
  margin: 25px 5px;
  padding: 10px 15px;
}
</style>
