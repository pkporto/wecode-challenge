import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import 'express-async-errors';


import AppError from '@shared/helpers/AppError';


const app = express();
const PORT = 6666;
//Enable CORS
app.use(cors());

app.use(express.json());


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
                status: 'error',
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


app.listen(PORT, () =>{
    console.log(`Server rodando na porta ${PORT}`);
})