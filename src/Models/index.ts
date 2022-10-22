import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const roles:any = {}

roles.mongoose = mongoose

roles.user = require('./User');
roles.roles = require('./role');

roles.ROLES = ["user","admin"];

export default roles;