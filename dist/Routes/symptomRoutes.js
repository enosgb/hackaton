"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const symptomController_1 = __importDefault(require("../Controllers/symptomController"));
const router = express_1.default.Router();
router
    .get('/symptoms', symptomController_1.default.getSymptoms)
    .get('/symptom/:id', symptomController_1.default.getSymptomsById)
    .post('/symptoms', symptomController_1.default.createSymptom);
exports.default = router;
