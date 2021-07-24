import { getCustomRepository } from 'typeorm';
import { User } from '../infra/typeorm/entities/User.entity';
import { UserRepository } from '../domain/repositories/UserRepository';

export class GetAllUsersUseCase {
    async execute(): Promise<User[]> {
        const moviesRepository = getCustomRepository(
            UserRepository,
        );

        const result = await moviesRepository.getAllUsers();
                console.log(result);
        return result;
    }
}
