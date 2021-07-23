import { Router } from 'express';
import { addMovieController } from '@modules/movie/AddMovie/AddMovieIndex';

const moviesRoutes = Router();

moviesRoutes.post('/addMovies', (req, res) => {
    return addMovieController.handle(req, res);
});



export { moviesRoutes };
