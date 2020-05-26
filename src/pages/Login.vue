<template>
  <q-page class="flex flex-center">
      <div class="col-xl">
        <div class="text-h4">
          HeatFeet
          <q-badge align="top">beta</q-badge>
        </div>
        <q-input class="q-mt-md" rounded outlined v-model="doctor.email" label="Email"/>
        <q-input class="q-mt-md" rounded outlined v-model="doctor.password" label="Senha"/>
        <q-btn class="q-mt-md" size="15px" @click="login" unelevated rounded color="secondary" label="Entrar" /><br>
        <div class="q-mt-sm">Não possuí cadastro? Clique <a style="color: #0000FF;" @click="goToSignUp">aqui</a> para se cadastrar</div>
        <!-- <q-btn size="15px" unelevated rounded color="secondary" label="Cadastre-se" /> -->
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      doctor: {
        email: '',
        password: ''
      }
    }
  },

  mounted () {
    //this.goToMainPanel()
  },

  methods: {
    goToSignUp() {
      this.$router.push({
        name: 'sign-up'
      })
    },

    goToMainPanel() {
      this.$router.push({
        name: 'main'
      })
    },

    login() {
      console.log(this.doctor)
      this.goToMainPanel()
    }
  }
}
</script>

<style>
.heat-container{
  display: flex;
  align-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
}

.spacing-item{
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>