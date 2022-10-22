import express from 'express';
import AppointmentContoller from '../Controllers/appointmentContoller';

const router = express.Router();

router
    .get('/appointments', AppointmentContoller.getAppointments)
    .get('/apppointment/:id', AppointmentContoller.getAppointmentById)
    .get('/appointments/order',AppointmentContoller.getAppointmentOrder)
    .post('/appointments', AppointmentContoller.createAppointment)
    .put('/appointments', AppointmentContoller.updateAppointment)
    .delete('/appointment/:id', AppointmentContoller.deleteAppointment)

export default router;