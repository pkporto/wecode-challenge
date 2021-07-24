"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("../typeorm");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
var AppError_1 = __importDefault(require("../../shared/helpers/AppError"));
var MoviesRoutes_1 = require("../../modules/movie/infra/http/MoviesRoutes");
var UsersRoutes_1 = require("../../modules/user/infra/http/UsersRoutes");
var app = express_1.default();
var PORT = 9991;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(MoviesRoutes_1.moviesRoutes);
app.use(UsersRoutes_1.usersRoutes);
app.use(function (error, request, response, next) {
    if (error instanceof AppError_1.default) {
        console.log('App Error');
        console.log(error);
        return response.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message,
        });
    }
    console.log(error);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});
app.listen(process.env.PORT || PORT, function () {
    console.log("App rodando na porta " + PORT);
});
