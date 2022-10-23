import { Request, Response } from 'express'
import appointments from '../Models/Appointment'

class AppointmentContoller {


    static getAppointments = (req: Request, res: Response) => {
        function orderByDanger(appointments: any) {
            return appointments.sort(function (a: any, b: any) {
                if (new Date(a.appointmentDay) > new Date(b.appointmentDay)) {
                    return -1;
                }
                if (new Date(a.appointmentDay) < new Date(b.appointmentDay)) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            })
        }

        function orderByGood(appointments: any) {
            return appointments.sort(function (a: any, b: any) {
                if (new Date(a.appointmentDay) > new Date(b.appointmentDay)) {
                    return 1;
                }
                if (new Date(a.appointmentDay) < new Date(b.appointmentDay)) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            })
        }

        const order = req.query.order;


        appointments.find((err: any, appointments: any) => {
            if (order === "danger") {
                let result = orderByDanger(appointments)
                res.status(200).json(appointments);
            }
            else if (order === "good") {
                let result = orderByGood(appointments)
                res.status(200).json(appointments);
            } else {

                res.status(200).json(appointments);
            }
        })
    }

    static getAppointmentById = (req: Request, res: Response) => {
        const id = req.params.id;

        appointments.findById(id, (err: any, appointment: any) => {
            if (err) {
                res.status(400)
                    .send({ message: `${err.message} - id de consulta não encontrado!` })
            } else {
                res.status(200).send(appointment);
            }
        })
    }

    static createAppointment = (req: Request, res: Response) => {
        let appointment = new appointments(req.body);

        appointment.save((err) => {
            if (err) {
                res.status(500)
                    .send({ message: `${err.message} - falha ao cadastrar consulta` })
            } else {
                res.status(201).send(appointment.toJSON());
            }
        })
    }

    static updateAppointment = (req: Request, res: Response) => {
        const id = req.params.id;

        appointments.findByIdAndUpdate(id, { $set: req.body }, (err: any) => {
            if (!err) {
                res.status(200).send({ message: "Consulta atualizada com sucesso!" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteAppointment = (req: Request, res: Response) => {
        const id = req.params.id;

        appointments.findByIdAndDelete(id, (err: any) => {
            if (!err) {
                res.status(200).send({ message: "Consulta removida com sucesso!" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


}

export default AppointmentContoller