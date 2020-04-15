<template>
  <b-container>
    <h1>Publica tu Coche</h1>
    <b-row>
      <b-col sm="4">
        <b-form class="form">
          <b-form-group id="input-maker">
            <b-form-select v-model="selected" :options="$store.state.maker.makers">
              <template v-slot:first>
                <b-form-select-option value="null" disabled>Elige una Opción</b-form-select-option>
              </template>
            </b-form-select>
          </b-form-group>
        </b-form>
      </b-col>
      <b-col sm="4">La parte de cargar fotos</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      selected: null
    }
  }
}
</script>
