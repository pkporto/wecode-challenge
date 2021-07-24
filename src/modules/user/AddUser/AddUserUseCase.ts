import { getCustomRepository } from 'typeorm';
import { User } from '../infra/typeorm/entities/User.entity';
import { UserRepository } from '../domain/repositories/UserRepository';
import { IAddUser } from './AddUserDTO';

export class AddUserUseCase {
    async execute(data: IAddUser) {
        const usersRepository = getCustomRepository(UserRepository);

        //Checking if it exists
        const userAlreadyExists = await usersRepository.findByName(data.name);
        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new User(data);
        await usersRepository.save(user);
    }
}
