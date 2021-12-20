import { Router } from "express";
import { PokemonsController } from "../controllers/PokemonsController";

const pokemonsService = new PokemonsController();

const routes = Router();

routes.get("/pokemons", (req, res) => {
  res.render("pokemons/index", {
    pageTitle: "Pokedex",
    pokemons: pokemonsService.getAll(),
  });
});

routes.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  const pokemon = pokemonsService.getById(Number(id));

  if (pokemon) {
    res.render("pokemons/[id]", {
      pageTitle: `#${pokemon.id} - ${pokemon.name}`,
      pokemon,
    });
  } else {
    res.send("Esse Pokémon não existe!");
  }
});

export default routes;
