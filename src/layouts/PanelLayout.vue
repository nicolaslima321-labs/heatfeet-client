<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-tabs
        v-model="tab"
        dense
        no-caps
        inline-label
        class="bg-teal text-white shadow-2"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PanelLayout',

  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
