import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:root@cluster0.0dzeewj.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;
export default db;
