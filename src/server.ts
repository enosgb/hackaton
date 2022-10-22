import express from "express";
import routes from "./Routes/index";
import db from "./Config/dbConnect";
import roles from './Models'
const Role = roles.role;
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

function initial(){
  Role.estimatedDocumentCount((err:any, count:number)=>{
    if(!err && count ===0){
      new Role({
        name: "User"
      }).save((err: any) =>{
        if(err){
          console.log('erro',err);
        }
        console.log("usuario adicionado a coleção")
      })

      new Role({
        name: "admin"
      }).save((err:any)=>{
        if(err){
          console.log('erro', err);
        }

        console.log("admin adicionado a coleção")
      })
    }
  })
}