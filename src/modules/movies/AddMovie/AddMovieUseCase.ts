import { getCustomRepository } from 'typeorm';
import { User } from '../infra/typeorm/entities/User';
import { UserRepository } from '../domain/repositories/UserRepository';
// import { IUserRepository } from '../domain/models/IUserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
    async execute(data: ICreateUserRequestDTO) {
        const usersRepository = getCustomRepository(UserRepository);
        //Checking if it exists
        const userAlreadyExists = await usersRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new User(data);
        await usersRepository.save(user);
    }
}
