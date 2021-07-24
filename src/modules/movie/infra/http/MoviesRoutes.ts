import { Router } from 'express';
import { addMovieController } from '../../AddMovie/AddMovieIndex';
import { getAllMoviesController } from '../../GetAllMovies/GetAllMoviesIndex';
import { addWatcherController} from '../../AddWatcher/AddWatcherIndex';

const moviesRoutes = Router();

moviesRoutes.post('/addMovie', (req, res) => {
    return addMovieController.handle(req, res);
});

moviesRoutes.get('/getAllMovies', (req, res) => {
    return getAllMoviesController.handle(req, res);
});


moviesRoutes.post('/addWatcher', (req, res) => {
    return addWatcherController.handle(req, res);
});


export { moviesRoutes };
