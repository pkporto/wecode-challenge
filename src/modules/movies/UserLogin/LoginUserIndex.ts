import { UserRepository } from '../domain/repositories/UserRepository';
import { LoginUserController } from './LoginUserController';
import { LoginUserUseCase } from './LoginUserUseCase';

const userRepository = new UserRepository();

const loginUserUseCase = new LoginUserUseCase(userRepository);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController };
