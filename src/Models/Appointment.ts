import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        user:{type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true},
        appointmentDay:{type: Date},
        showNotification:{type: String}
    }
)

const appointments = mongoose.model('appointment', appointmentSchema);

export default appointments;