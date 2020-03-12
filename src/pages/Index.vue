<template>
  <q-page class="flex flex-center">
    <div class="container" id="teste" name="teste">
      dsasdsdadsasaddsa
    </div>
    <p id="lorem" name="lorem">oi</p>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      heatmap: false
    }
  },

  mounted() {
    var heatmapInstance = require('heatmap.js')

    var element = document.getElementById('teste')

    var heatmap = heatmapInstance.create({
      "container": document.querySelector(".container"),
      "radius" : 90,
      gradient: {
        '0.1': '#000000',
        '0.5': 'orange',
        '1.0': 'red'
      },
    })

    document.querySelector('.container').onmousemove = function(ev) {
      console.log('im here', ev)
      heatmap.addData({
        x: ev.layerX,
        y: ev.layerY,
        value: .6,
      });
    };

    console.log(heatmap)
  }
}
</script>

<style>
.container{
  height: 30em;
  width: 30em;
}
</style>