import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');
const config = require('../Config/auth.config');

const verifyToken = (req:Request,res:Response,next:NextFunction)=>{
    let token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({message: "Nenhum token foi informado!"})
    }

    jwt.verify(token,config.secret,(err:any,decoded:any)=>{
        if(err){
            return res.status(401).send({message: "não autorizado!"})
        }
        req.params.id = decoded.id;
        next();
    })
}