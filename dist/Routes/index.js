"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const appointmentRoutes_1 = __importDefault(require("./appointmentRoutes"));
const symptomRoutes_1 = __importDefault(require("./symptomRoutes"));
const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ message: "ok" });
    });
    app.use(express_1.default.json(), userRoutes_1.default, appointmentRoutes_1.default, symptomRoutes_1.default);
};
exports.default = routes;
