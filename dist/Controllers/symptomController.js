"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Symptom_1 = __importDefault(require("../Models/Symptom"));
class SymptomController {
}
SymptomController.getSymptoms = (req, res) => {
    Symptom_1.default.find((err, symptoms) => {
        res.status(200).json(symptoms);
    });
};
SymptomController.getSymptomsById = (req, res) => {
    const id = req.params.id;
    Symptom_1.default.findById(id, (err, symptom) => {
        if (err) {
            res.status(400)
                .send({ message: `${err.message} - id de sintoma não encotrado` });
        }
        else {
            res.status(200).send(symptom);
        }
    });
};
SymptomController.createSymptom = (req, res) => {
    let symptom = new Symptom_1.default(req.body);
    symptom.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - falha ao cadastar simtoma` });
        }
        else {
            res.status(201).send(symptom.toJSON());
        }
    });
};
exports.default = SymptomController;
