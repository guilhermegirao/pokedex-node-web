import fs from "fs";
import { Pokemon } from "../models/Pokemon";
import { file as pokedexFile } from "../utils/constants/files";

export class PokemonsController {
  private pokemons: Pokemon[] = [];

  constructor() {
    const fileData = fs.readFileSync(pokedexFile, "utf8");
    const { pokemons: pokemonData } = JSON.parse(fileData);

    for (let pokemon of pokemonData) {
      const {
        id,
        name,
        stats: [
          { base_stat: pvMax },
          { base_stat: ataque },
          { base_stat: defesa },
          { base_stat: ataque_especial },
          { base_stat: defesa_especial },
          { base_stat: velocidade },
        ],
        sprites: { front_default },
        height,
        weight,
      } = pokemon;

      const status = {
        pvMax,
        ataque,
        defesa,
        ataque_especial,
        defesa_especial,
        velocidade,
      };

      const type1 = pokemon?.types[0]?.type?.name;
      const type2 = pokemon?.types[1]?.type?.name;

      this.pokemons.push(
        new Pokemon(
          id,
          name,
          status,
          front_default,
          type1,
          type2,
          height,
          weight
        )
      );
    }
  }

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  getById(id: number): Pokemon {
    return this.pokemons.filter((pokemon) => pokemon.id === id)[0];
  }
}
