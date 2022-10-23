import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
        patient: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
        appointmentDay: { type: Date , required:true},
        showNotification: { type: Boolean, required:true},
    }
)

const appointments = mongoose.model('appointment', appointmentSchema);

export default appointments;