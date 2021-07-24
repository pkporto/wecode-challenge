import { getCustomRepository } from 'typeorm';
import { User } from '../infra/typeorm/entities/User.entity';
import { UserRepository } from '../domain/repositories/UserRepository';
import { IAddUser } from './AddUserDTO';
import AppError from '@shared/helpers/AppError';

export class AddUserUseCase {
    async execute(data: IAddUser) {
        const usersRepository = getCustomRepository(UserRepository);

        //Checking if it exists
        const userAlreadyExists = await usersRepository.findByName(data.name);
        if (userAlreadyExists) {
            throw new AppError('O usuário já está cadastrado.');
        }

        const user = new User(data);
        await usersRepository.save(user);
    }
}
