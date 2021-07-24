import { getCustomRepository } from 'typeorm';
import { Movie } from '../infra/typeorm/entities/Movie.entity';
import { MovieRepository } from '../domain/repositories/MovieRepository';
import { IAddMovie } from './AddMovieDTO';
import AppError from '@shared/helpers/AppError';

export class AddMovieUseCase {
    async execute(data: IAddMovie) {
        const moviesRepository = getCustomRepository(MovieRepository);

        //Checking if it exists
        const movieAlreadyExists = await moviesRepository.findByName(data.name);
        if (movieAlreadyExists) {
            throw new AppError('O filme já está cadastrado.');
        }

        const movie = new Movie(data);
        await moviesRepository.save(movie);
    }
}
