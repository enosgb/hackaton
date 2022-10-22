import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const users = mongoose.model("users", userSchema);

export default users;