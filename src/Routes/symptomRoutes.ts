import express from 'express';
import SymptomController from '../Controllers/symptomController';

const router = express.Router();

router
    .get('/symptoms',SymptomController.getSymptoms)
    .get('/symptom/:id',SymptomController.getSymptomsById)
    .post('/symptoms',SymptomController.createSymptom)
    

export default router;
    