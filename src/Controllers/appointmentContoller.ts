import appointments from "../Models/appointment";
import { Request, Response } from 'express'

class AppointmentContoller {
    static getAppointments = (req: Request, res: Response) => {
        appointments.find((err: any, appointments: any) => {
            res.status(200).json(appointments);
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