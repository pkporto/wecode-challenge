import 'reflect-metadata';
import '../typeorm';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import AppError from '../../shared/helpers/AppError';

import { moviesRoutes } from '../../modules/movie/infra/http/MoviesRoutes';
import { usersRoutes } from '../../modules/user/infra/http/UsersRoutes';

const app = express();
const PORT = 9991;

app.use(cors());
app.use(express.json());

app.use(moviesRoutes);
app.use(usersRoutes);


app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        if (error instanceof AppError) {
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
    },
);
app.listen(PORT,()  => {
    console.log(`App rodando na porta ${PORT}`);
});