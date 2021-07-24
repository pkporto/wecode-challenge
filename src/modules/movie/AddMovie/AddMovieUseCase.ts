import { getCustomRepository } from 'typeorm';
import { Movie } from '../infra/typeorm/entities/Movie.entity';
import { MovieRepository } from '../domain/repositories/MovieRepository';
import { IAddMovie } from './AddMovieDTO';

export class AddMovieUseCase {
    async execute(data: IAddMovie) {
        const moviesRepository = getCustomRepository(MovieRepository);

        //Checking if it exists
        const movieAlreadyExists = await moviesRepository.findByName(data.name);
        if (movieAlreadyExists) {
            throw new Error('Movie already exists.');
        }

        const movie = new Movie(data);
        await moviesRepository.save(movie);
    }
}
