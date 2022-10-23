"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const appointmentSchema = new mongoose_1.default.Schema({
    doctor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'users', required: true },
    patient: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'users', required: true },
    appointmentDay: { type: Date, required: true },
    showNotification: { type: Boolean, required: true },
});
const appointments = mongoose_1.default.model('appointment', appointmentSchema);
exports.default = appointments;
