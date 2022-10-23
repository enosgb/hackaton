import mongoose from "mongoose";

const symptomSchema = new mongoose.Schema(
    {
        description: { type: String }
    }
)

const symptoms = mongoose.model('symptoms', symptomSchema);

export default symptoms;
