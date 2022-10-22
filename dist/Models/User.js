"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt = require('bcrypt');
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    bornDate: {
        type: Date,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    height: {
        type: String,
        trim: true,
    },
    weight: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true,
        required: true
    },
}, {
    versionKey: false,
});
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
