import { GetAllMoviesController } from './GetAllMoviesController';
import { GetAllMoviesUseCase } from './GetAllMoviesUseCase';

const getAllMoviesUseCase = new GetAllMoviesUseCase();
const getAllMoviesController = new GetAllMoviesController(
    getAllMoviesUseCase,
);

export { getAllMoviesController };
