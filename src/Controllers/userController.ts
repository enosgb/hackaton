import { NextFunction, Request, Response } from "express";
import Users from "../Models/User";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


class UserController {

  static register = (req: Request, res: Response) => {
    let newUser = new Users(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function (err, user) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        user.hash_password = undefined;
        return res.json(user);
      }
    });
  }

  static sign_in = (req: Request, res: Response) => {
    Users.findOne({
      email: req.body.email
    }, function (err: any, user: any) {
      if (err) throw err;
      if (!user || !user.comparePassword(req.body.password)) {
        return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
      }
      return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
    });
  }

  static loginRequired = (req: any, res: Response, next: NextFunction) => {
    if (req.user) {
      next();
    } else {

      return res.status(401).json({ message: 'Unauthorized user!!' });
    }
  }

  static profile = (req: any, res: Response, next: NextFunction) => {
    if (req.user) {
      res.send(req.user);
      next();
    }
    else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }

  static getById = (req: Request, res: Response) => {
    const id = req.params.id;

    Users.findById(id, (err: any, User: any) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id de Usuario não encontrado` });
      } else {
        res.status(200).send(User);
      }

    })
  }
  

  static getUsers = (req:Request, res:Response) => {
    Users.find((err, users) => {
      res.status(200).json(users);
    });
  };

}
export default UserController;
