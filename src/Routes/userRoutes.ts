import express from "express";
import UserController from "../Controllers/userController";

const router = express.Router();

router
  .get("/users",UserController.getUsers)
  .get("/user/:id",UserController.getById)
  .post("/tasks", UserController.loginRequired, UserController.profile)
  .post("/auth/register", UserController.register)
  .post("/auth/sign_in", UserController.sign_in)

export default router;
