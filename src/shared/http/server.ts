import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import AppError from '@shared/helpers/AppError';


const app = express();
const PORT = 9991;

app.use(cors());
app.use(express.json());

app.listen(PORT,()  => {
    console.log(`App rodando na porta ${PORT}`);
});