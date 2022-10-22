"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../Models/User"));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class UserController {
}
UserController.register = (req, res) => {
    let newUser = new User_1.default(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function (err, user) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        else {
            user.hash_password = undefined;
            return res.json(user);
        }
    });
};
UserController.sign_in = (req, res) => {
    User_1.default.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err)
            throw err;
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
    });
};
UserController.loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    }
    else {
        return res.status(401).json({ message: 'Unauthorized user!!' });
    }
};
UserController.profile = (req, res, next) => {
    if (req.user) {
        res.send(req.user);
        next();
    }
    else {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
exports.default = UserController;
