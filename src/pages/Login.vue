<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div>
        <q-input class="spacing-item" rounded outlined v-model="email" label="Email"/>
        <q-input class="spacing-item" rounded outlined v-model="password" label="Senha"/>
        <q-btn class="spacing-item" size="15px" unelevated rounded color="secondary" label="Entrar" /><br>
        <b>Não possuí cadastro? Clique <a>aqui</a> para se cadastrar</b>
        <!-- <q-btn size="15px" unelevated rounded color="secondary" label="Cadastre-se" /> -->
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      user: false
    }
  }
}
</script>

<style>
.container{
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