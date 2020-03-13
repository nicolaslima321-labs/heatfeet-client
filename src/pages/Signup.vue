<template>
  <q-page class="flex flex-center">
    <div class="col-xl">
      <div class="text-h4">
        Cadastro
      </div>
      <q-input class="q-mt-md" rounded outlined v-model="doctor.name" label="Nome" />
      <q-input class="q-mt-md" rounded outlined v-model="doctor.email" label="E-mail" />
      <q-input class="q-mt-md" rounded outlined v-model="doctor.password" label="Senha" />
      <q-input class="q-mt-md" rounded outlined v-model="doctor.birth" label="Data de Nascimento" />
      <q-input class="q-mt-md" rounded outlined v-model="doctor.crm" label="CRM" />
      <q-btn class="q-mt-md" size="15px" unelevated rounded color="secondary" label="Enviar" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Signup',

  data() {
    return {
      doctor: {
        name: '',
        email: '',
        password: '',
        birth: '',
        crm: '',
      }
    }
  }
}
</script>

<style>
</style>