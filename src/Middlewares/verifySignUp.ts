import roles from '../Models'
import Request, { NextFunction, Response } from 'express';
const ROLES = roles.roles;
const User = roles.user;

const checkDuplicateUsernameOrEmail = (req:any,res:Response,next:NextFunction)=>{
    User.findOne({
        username: req.body.username
    })
}