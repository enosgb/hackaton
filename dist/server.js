"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./Routes/index"));
const dbConnect_1 = __importDefault(require("./Config/dbConnect"));
require("express-async-errors");
require("reflect-metadata");
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 3000;
const jwt = require('jsonwebtoken');
dbConnect_1.default.on("error", console.log.bind(console, "Erro de Conexão com o banco de dados!"));
dbConnect_1.default.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
});
const app = express();
const route = (0, express_1.Router)();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
            if (err)
                req.user = undefined;
            req.user = decode;
            next();
        });
    }
    else {
        req.user = undefined;
        next();
    }
});
(0, index_1.default)(app);
app.listen(port, () => `server running on port ${port}`);
