import { getCustomRepository } from 'typeorm';
import { Movie } from '../infra/typeorm/entities/Movie.entity';
import { MovieRepository } from '../domain/repositories/MovieRepository';
import { UserRepository } from '../../user/domain/repositories/UserRepository';
import { IAddWatcher } from './AddWatcherDTO';
import AppError from '../../../shared/helpers/AppError';

export class AddWatcherUseCase {
    async execute(data: IAddWatcher) {
        const moviesRepository = getCustomRepository(MovieRepository);
        const usersRepository = getCustomRepository(UserRepository);

        //Checking if it exists
        let movieExists = await moviesRepository.findById(data.movie_id);
        if (!movieExists) {
            throw new AppError('O filme não está na lista.', 404);
        }

        let userExists = await usersRepository.findById(data.user_id);
        if (!userExists) {
            throw new AppError('Usuário não cadastrado.', 404);
        }

        movieExists.watchers += 1;
        userExists.watched += 1;

        await moviesRepository.save(movieExists);
        await usersRepository.save(userExists);
    }
}
