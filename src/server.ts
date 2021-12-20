import express from "express";
import path from "path";
import { engine } from "express-handlebars";

import routes from "./routes/routes";

const app = express();

app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + `/views/layouts`,
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

const PORT = 3001;

app.use(routes);

app.get("/", (req, res) => res.redirect("/pokemons"));

app.listen(PORT, () => console.log(`Servidor rodando na porta :${PORT}`));
