import express from 'express';
import AppointmentContoller from '../Controllers/appointmentContoller';

const router = express.Router();

router
    .get('/appointments',AppointmentContoller.getAppointments)
    .get('/apppointment/:id',AppointmentContoller.getAppointmentById)
    .post