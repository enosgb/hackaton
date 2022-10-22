import express from "express";
import UserController from "../Controllers/usuariosController";

const router = express.Router();

router
  .get("/users", UserController.getUsers)
  .get("/users/:id", UserController.getUserById)
  .post("/users", UserController.createUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.deleteUser);

  export default router;
