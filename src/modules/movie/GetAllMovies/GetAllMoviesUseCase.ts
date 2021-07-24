import { getCustomRepository } from 'typeorm';
import { Movie } from '../infra/typeorm/entities/Movie.entity';
import { MovieRepository } from '../domain/repositories/MovieRepository';

export class GetAllMoviesUseCase {
    async execute(): Promise<Movie[]> {
        const moviesRepository = getCustomRepository(
            MovieRepository,
        );

        const result = await moviesRepository.getAllMovies();
                console.log(result);
        return result;
    }
}
