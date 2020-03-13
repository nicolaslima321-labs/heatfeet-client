<template>
  <q-page class="flex bg-grey-11 ">
    <div id="container" class="col-xl bg-grey-10 heat-container" @mousedown="drawHeatMap">
      oi
    </div>
    <div class="col-md">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nulla commodi possimus eius sunt quibusdam reiciendis omnis vel tenetur pariatur, aspernatur vitae impedit optio veniam tempore explicabo ad, doloribus ut?
      </p>
    </div>
  </q-page>
</template>

<script>
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
    heatmap = heatmapInstance.create({
      "container": document.querySelector(".heat-container"),
      "radius" : 90,
      gradient: {
        '0.1': '#000000',
        '0.5': 'orange',
        '1.0': 'red'
      },
    })
    console.log('mounted')
  },

  methods: {
    drawHeatMap(e) {
      heatmap.addData({
        x: e.layerX,
        y: e.layerY,
        value: 1.9,
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