"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("../typeorm");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const AppError_1 = __importDefault(require("../../shared/helpers/AppError"));
const MoviesRoutes_1 = require("../../modules/movie/infra/http/MoviesRoutes");
const UsersRoutes_1 = require("../../modules/user/infra/http/UsersRoutes");
const app = express_1.default();
const PORT = 9991;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(MoviesRoutes_1.moviesRoutes);
app.use(UsersRoutes_1.usersRoutes);
app.use((error, request, response, next) => {
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
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
