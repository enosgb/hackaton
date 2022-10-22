import express from "express";
import routes from "./Routes/index";
import db from "./Config/dbConnect";
import { Router } from "express";

db.on(
  "error",
  console.log.bind(console, "Erro de Conexão com o banco de dados!")
);
db.once("open", () => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
});

const app = express();

const route = Router();

const port = process.env.PORT || 3000;

app.use(express.json());

routes(app);

app.listen(port, () => `server running on port ${port}` );
