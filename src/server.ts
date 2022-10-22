import { Router, Response, Request, NextFunction } from "express";
import routes from "./Routes/index";
import db from "./Config/dbConnect";
import 'express-async-errors'
import 'reflect-metadata'
const express = require('express')

const port = process.env.PORT || 3000;

const jwt = require('jsonwebtoken')

db.on(
  "error",
  console.log.bind(console, "Erro de Conexão com o banco de dados!")
);
db.once("open", () => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
});


const app = express();

const route = Router();


app.use(express.json());

app.use(function (req: any, res: Response, next: NextFunction) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err: any, decode: any) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

routes(app);

app.listen(port, () => `server running on port ${port}`);
