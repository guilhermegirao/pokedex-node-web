<template>
  <div class="vh-100 d-flex w-100 justify-content-center align-items-center">
    <div class="text-center">
      <div class="max-w-xl">
        <h1 class="mb-7 text-7xl font-bold">Oh no! 404 :(</h1>
        <p class="mb-7 text-xl">Esta página não existe ou foi excluída.</p>
        <button class="btn btn-primary" @click="goBack()">Voltar à Pokédex</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/pokemons");
    },
  },
};
</script>
