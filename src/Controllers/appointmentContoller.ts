import { Request, Response } from 'express'
import appointments from '../Models/Appointment'

class AppointmentContoller {
    static getAppointments = (req: Request, res: Response) => {
        const order = req.query;
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const d1 = new Date(today.toISOString().slice(0, 10));
        const d2 = new Date('2022-10-12');
        const result = d1.getTime() - d2.getTime();
        const diffInDays = (result / (1000 * 60 * 60 * 24));
        console.log(diffInDays) 

        

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