import { AddMovieController } from './AddMovieController';
import { AddMovieUseCase } from './AddMovieUseCase';

const addMovieUseCase = new AddMovieUseCase();

const addMovieController = new AddMovieController(addMovieUseCase);

export { addMovieController };
