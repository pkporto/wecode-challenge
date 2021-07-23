import { CreateUserController } from './AddMovieController';
import { CreateUserUseCase } from './CreateUserUseCase';

const createUserUseCase = new CreateUserUseCase();

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
