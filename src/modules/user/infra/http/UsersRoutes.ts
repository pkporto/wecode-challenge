import { Router } from 'express';
import { addMovieController } from '@modules/movie/AddMovie/AddMovieIndex';
import { getAllMoviesController } from '@modules/movie/GetAllMovies/GetAllMoviesIndex';

const moviesRoutes = Router();

moviesRoutes.post('/addMovie', (req, res) => {
    return addMovieController.handle(req, res);
});

moviesRoutes.get('/getAllMovies', (req, res) => {
    return getAllMoviesController.handle(req, res);
});



export { moviesRoutes };
