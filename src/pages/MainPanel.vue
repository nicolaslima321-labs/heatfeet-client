<template>
  <q-page class="flex bg-grey-11 ">
    <div class="row bg-grey-10 heat-container" @mousedown="drawHeatMap">
    </div>
    <div class="col bg-grey-5">
      <q-btn 
        class="save-button q-mt-md" 
        size="12px" 
        @click="storeImage" 
        unelevated 
        rounded 
        color="secondary" 
        label="Salvar Mapa" 
        icon="save"
      />
      <q-btn 
        class="save-button q-mt-md" 
        size="12px" 
        @click="storeImage" 
        unelevated 
        rounded 
        color="secondary" 
        label="Armazenar" 
        icon="save"
      />
    </div>
  </q-page>
</template>

<script>
import Reader from '../utils/Reader.js'

const reader = new Reader()
const heatmapInstance = require('heatmap.js')
let heatmap

export default {
  name: 'MainPanel',

  data() {
    return {
      user: false
    }
  },

  mounted () {
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

    console.log('mounted')
  },

  methods: {
    drawHeatMap(e) {
      heatmap.addData({
        x: e.layerX,
        y: e.layerY,
        value: 0.9,
      });

      console.log(heatmap)
    }
  }
}
</script>

<style>
.heat-container{
  width: 70%;
}

.save-button{
  flex-direction: end; 
  margin-left: 1.5em;
}
</style>