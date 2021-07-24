import 'reflect-metadata';
import '../typeorm';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import AppError from '@shared/helpers/AppError';
import { moviesRoutes } from '@modules/movie/infra/http/MoviesRoutes';


const app = express();
const PORT = 9991;

app.use(cors());
app.use(express.json());

app.use(moviesRoutes);

app.listen(PORT,()  => {
    console.log(`App rodando na porta ${PORT}`);
});