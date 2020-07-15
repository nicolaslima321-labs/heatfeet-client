<template>
  <q-page class="flex bg-grey-11 ">
    <div class="row bg-grey-10 heat-container" @mousemove="drawHeatMap">
    </div>
    <div class="col bg-grey-3">
      <div style="margin: 1em 0 0 1em" class="text-h5">
        Dados do Paciente:
      </div>
      <q-input class="feet-input q-mt-md" rounded outlined v-model="patient.name" label="Nome"/>
      <q-input class="feet-input q-mt-md" rounded outlined v-model="patient.age" label="Idade"/>
      <q-input class="feet-input q-mt-md" rounded outlined v-model="patient.sex" label="Sexo"/>
      <q-input class="feet-input q-mt-md" rounded outlined v-model="patient.feetSize" label="Tamanho do Calçado"/>
      <q-input class="feet-input q-mt-md" rounded outlined v-model="patient.notes" label="Observações"/>
      <q-btn 
        class="save-button q-mt-md" 
        size="12px" 
        @click="storeImage" 
        unelevated 
        rounded 
        color="secondary" 
        label="Salvar Imagem" 
        icon="save"
      />
    </div>
  </q-page>
</template>

<script>
import eventsBus from '../events/eventsBus.js'
import log from '../Classes/handlers/LogHandler.js'

const __CLASS__ = "MainPanel"

const heatmapInstance = require('heatmap.js')
let heatmap

export default {
  name: 'MainPanel',

  data() {
    return {
      user: false,
      patient: {
        name: '',
        age: '',
        sex: '',
        feetSize: '',
        notes: ''
      },
      arduino: null,
      feetProps: []
    }
  },

  mounted () {
    log.info(`[${__CLASS__}@mounted]: Mounting..`)

    heatmap = heatmapInstance.create({
      "container": document.querySelector(".heat-container"),
      "radius" : 50,
      gradient: {
        '0.1': '#0096FA',
        '0.5': '#FAAF00',
        '1.0': '#FA0000'
      }
    })
  },

  methods: {
    drawHeatMap(feet) {
      log.info(`[${__CLASS__}@drawHeatMap]: Drawing HeatMap..`)

      heatmap.addData({
        x: feet.x,
        y: feet.y,
        value: this.getFeetIntensityCoefficient(feet),
      });

      console.log(heatmap)
    },

    storeImage() {
      console.log("Im not done :(")
    },

    getFeetIntensityCoefficient(feet) {
      return feet.intensity / (feet.intensity + 1)
    }
  }
}
</script>

<style>
.heat-container{
  min-width: 70%;
}

.feet-input{
  width: 80%;
  margin-left: 1em;
}

.save-button{
  flex-direction: end; 
  margin-left: 1.5em;
}
</style>