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
        <q-tab name="panel" icon="assignment" label="Painel Principal" />
        <q-tab name="config" icon="settings" label="Configurações" />
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
      tab: 'panel'
    }
  }
}
</script>
