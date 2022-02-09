import { Router } from "express";
import { PokemonsController } from "../controllers/PokemonsController";

const PokemonsService = new PokemonsController();

const routes = Router();

routes.get("/pokemons", (req, res) => PokemonsService.getAll(req, res));
routes.get("/pokemon/:id", (req, res) => PokemonsService.getById(req, res));

export default routes;
