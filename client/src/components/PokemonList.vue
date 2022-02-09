<template>
  <div>
    <p v-if="data.length === 0">Não há Pokémons para listar...</p>
    <div class="row" v-else>
      <input
        type="search"
        name="filter"
        class="w-100 input form-control ds-input my-3"
        placeholder="Pesquisar por nome ou tipo do Pokémon"
        v-model="filter"
      />
      <div
        class="col-lg-3 col-md-6 col-sm-12"
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
      >
        <div class="card shadow-sm">
          <img :src="pokemon.image" class="card-img-top" :alt="pokemon.name" />

          <div class="card-body">
            <h5 class="card-title">#{{ pokemon.id }} - {{ pokemon.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <span class="badge badge-secondary">
                {{ pokemon.type1 }}
              </span>
              <span class="badge badge-secondary" v-if="pokemon.type2">
                {{ pokemon.type2 }}
              </span>
            </h6>
            <div class="w-100">
              <a :href="'./pokemon/' + pokemon.id">
                <button type="button" class="btn btn-primary w-100">ver informações</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    filteredPokemons() {
      if (this.filter !== "") {
        return this.data.filter((pokemon) => {
          const searchFilter = this.filter.toLowerCase();
          const name = pokemon.name.toLowerCase().includes(searchFilter);
          const type1 = pokemon.type1.toLowerCase().includes(searchFilter);
          const type2 = pokemon?.type2?.toLowerCase()?.includes(searchFilter);

          return name || type1 || type2;
        });
      } else {
        return this.data;
      }
    },
  },
};
</script>
