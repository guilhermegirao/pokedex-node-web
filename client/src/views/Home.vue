<template>
  <div class="container py-3">
    <h1 class="text-center">Pokédex</h1>

    <p v-if="loading">Carregando...</p>
    <p v-else-if="errored">Ocorreu um erro ao pegar os dados da Pokédex...</p>
    <pokemon-list v-else :data="pokemons" />
  </div>
</template>

<script>
import api from "../utils/api";
import PokemonList from "../components/PokemonList.vue";

export default {
  components: { PokemonList },
  data() {
    return {
      pokemons: [],
      pokemonsData: [],
      loading: true,
      errored: false,
    };
  },
  mounted() {
    api
      .get("/pokemons")
      .then((response) => {
        this.pokemons = response.data.pokemons;
        this.pokemonsData = response.data.pokemons;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
