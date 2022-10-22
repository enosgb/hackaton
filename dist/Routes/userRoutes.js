"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../Controllers/userController"));
const router = express_1.default.Router();
router
    .post("/tasks", userController_1.default.loginRequired, userController_1.default.profile)
    .post("/auth/register", userController_1.default.register)
    .post("/auth/sign_in", userController_1.default.sign_in);
exports.default = router;
