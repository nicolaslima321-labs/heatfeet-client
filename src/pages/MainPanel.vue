<template>
  <q-page class="flex bg-grey-11 ">
    <div id="container" class="row bg-grey-10 heat-container" @mousedown="drawHeatMap">
      oi
    </div>
    <div class="row">
      <p>
        Lorem
      </p>
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
  width: 75%;
}
</style>