"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointmentContoller_1 = __importDefault(require("../Controllers/appointmentContoller"));
const router = express_1.default.Router();
router
    .get('/appointments', appointmentContoller_1.default.getAppointments)
    .get('/apppointment/:id', appointmentContoller_1.default.getAppointmentById)
    .post('/appointments', appointmentContoller_1.default.createAppointment)
    .put('/appointments', appointmentContoller_1.default.updateAppointment)
    .delete('/appointment/:id', appointmentContoller_1.default.deleteAppointment);
exports.default = router;
