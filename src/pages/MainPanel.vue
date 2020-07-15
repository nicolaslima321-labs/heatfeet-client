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
import Reader from '../utils/Reader.js'
import eventsBus from '../events/eventsBus.js'

const log = require('electron-log')
const heatmapInstance = require('heatmap.js')

log.transports.file.level = 'info'
log.transports.file.file = 'Heatfeet.log'
const reader = new Reader()

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
    console.log("MOUNTED")

    reader.processLineByLineFrom()

    heatmap = heatmapInstance.create({
      "container": document.querySelector(".heat-container"),
      "radius" : 50,
      gradient: {
        '0.1': '#0096FA',
        '0.5': '#FAAF00',
        '1.0': '#FA0000'
      }
    })

    console.log("ABOUT TO INITIALIZE ARDUINO")
    this.initializesArduino()

    console.log('mounted')
  },

  methods: {
    drawHeatMap(feet) {
      heatmap.addData({
        x: feet.x,
        y: feet.y,
        value: this.getFeetIntensityCoefficient(feet),
      });

      console.log(heatmap)
    },

    storeImage() {
      console.log('teste')
      console.log("ABOUT TO INITIALIZE handleFeetSensor")
      this.handleFeetSensor()
      console.log(this.feetProps)
    },

    initializesArduino() {
      this.arduino = require("../handler/FeetDataHandler.js")
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