<template>
  <div class="container py-3">
    <p v-if="loading">Carregando...</p>
    <p v-else-if="errored">Ocorreu um erro ao pegar os dados da Pokédex...</p>
    <pokemon v-else :pokemon="pokemon" />
  </div>
</template>

<script>
import api from "../utils/api";
import Pokemon from "../components/Pokemon.vue";

export default {
  components: { Pokemon },
  data() {
    return {
      pokemon: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    api
      .get(`/pokemon/${this.$route.params.id}`)
      .then((response) => {
        this.pokemon = response.data.pokemon;
      })
      .catch((error) => {
        this.errored = true;

        if (error.response.status === 404) {
          this.$router.push("/404");
        }
      })
      .finally(() => (this.loading = false));
  },
};
</script>
