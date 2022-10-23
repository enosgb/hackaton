import { Request, Response } from "express";
import symptoms from "../Models/Symptom";

class SymptomController {
    static getSymptoms = (req: Request, res: Response) => {
        symptoms.find((err, symptoms) => {
            res.status(200).json(symptoms)
        })
    }

    static getSymptomsById = (req: Request, res: Response) => {
        const id = req.params.id;

        symptoms.findById(id, (err: any, symptom: any) => {
            if (err) {
                res.status(400)
                    .send({ message: `${err.message} - id de sintoma não encotrado` })
            } else {
                res.status(200).send(symptom);
            }
        })
    }

    static createSymptom = (req: Request, res: Response) => {
        let symptom = new symptoms(req.body);

        symptom.save((err: any) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastar simtoma` });
            } else {
                res.status(201).send(symptom.toJSON());
            }
        })
    }
}

export default SymptomController;