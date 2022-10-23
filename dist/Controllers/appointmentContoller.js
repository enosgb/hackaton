"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Appointment_1 = __importDefault(require("../Models/Appointment"));
class AppointmentContoller {
}
AppointmentContoller.getAppointments = (req, res) => {
    function orderByDanger(appointments) {
        return appointments.sort(function (a, b) {
            if (new Date(a.appointmentDay) > new Date(b.appointmentDay)) {
                return -1;
            }
            if (new Date(a.appointmentDay) < new Date(b.appointmentDay)) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
    }
    function orderByGood(appointments) {
        return appointments.sort(function (a, b) {
            if (new Date(a.appointmentDay) > new Date(b.appointmentDay)) {
                return 1;
            }
            if (new Date(a.appointmentDay) < new Date(b.appointmentDay)) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }
    const order = req.query.order;
    Appointment_1.default.find((err, appointments) => {
        if (order === "danger") {
            let result = orderByDanger(appointments);
            res.status(200).json(appointments);
        }
        else if (order === "good") {
            let result = orderByGood(appointments);
            res.status(200).json(appointments);
        }
        else {
            res.status(200).json(appointments);
        }
    });
};
AppointmentContoller.getAppointmentById = (req, res) => {
    const id = req.params.id;
    Appointment_1.default.findById(id, (err, appointment) => {
        if (err) {
            res.status(400)
                .send({ message: `${err.message} - id de consulta não encontrado!` });
        }
        else {
            res.status(200).send(appointment);
        }
    });
};
AppointmentContoller.createAppointment = (req, res) => {
    let appointment = new Appointment_1.default(req.body);
    appointment.save((err) => {
        if (err) {
            res.status(500)
                .send({ message: `${err.message} - falha ao cadastrar consulta` });
        }
        else {
            res.status(201).send(appointment.toJSON());
        }
    });
};
AppointmentContoller.updateAppointment = (req, res) => {
    const id = req.params.id;
    Appointment_1.default.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
            res.status(200).send({ message: "Consulta atualizada com sucesso!" });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
AppointmentContoller.deleteAppointment = (req, res) => {
    const id = req.params.id;
    Appointment_1.default.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({ message: "Consulta removida com sucesso!" });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
exports.default = AppointmentContoller;
