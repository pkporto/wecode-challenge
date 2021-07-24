import { AddUserController } from './AddUserController';
import { AddUserUseCase } from './AddUserUseCase';

const addUserUseCase = new AddUserUseCase();

const addUserController = new AddUserController(addUserUseCase);

export { addUserController };
