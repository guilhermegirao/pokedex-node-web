import express from "express";
import cors from "cors";
import routes from "./routes/routes";

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(PORT, () => console.log(`Servidor rodando na porta :${PORT}`));
