import { request, Request, Response } from "express";
import users from "../Models/User";

class UserController {
  static getUsers = (req: Request, res: Response) => {
    users.find((err, users) => {
      res.status(200).json(users);
    });
  };

  static getUserById = (req: Request, res: Response) => {
    const id = req.params.id;

    users.findById(id, (err: any, User: any) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id de usuário não encontrado` });
      } else {
        res.status(200).send(User);
      }
    });
  };

  static createUser(req: Request, res: Response) {
    let user = new users(req, res);

    user.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao criar usuário.` });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  }

  static updateUser(req: Request, res: Response) {
    const id = req.params.id;

    users.findByIdAndUpdate(id, { $set: req.body }, (err: any) => {
      if (!err) {
        res.status(200).send({ message: "Usuário atualizado com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }

  static deleteUser(req: Request, res: Response) {
    const id = req.params.id;

    users.findByIdAndDelete(id, (err: any) => {
      if (!err) {
        res.status(200).send({ message: "Usuário removido com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }
}

export default UserController;
