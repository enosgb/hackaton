"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");
const router = express_1.default.Router();
router.use("/doc", swaggerUi.serve).get("/doc", swaggerUi.setup(swaggerFile));
exports.default = router;
