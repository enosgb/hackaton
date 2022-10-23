import express from "express";
import users from "./userRoutes";
import apointments from "./appointmentRoutes"
import symptoms from "./symptomRoutes"

const routes = (app: any) => {
  app.route("/").get((req: any, res: any) => {
    res.status(200).send({ message: "ok" });
  });

  app.use(express.json(), users, apointments,symptoms);
};

export default routes;
