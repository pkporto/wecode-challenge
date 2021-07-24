import { Movie } from '@modules/movie/infra/typeorm/entities/Movie.entity';

export interface IMovieRepository {
    findByName(name: string): Promise<Movie | undefined>;
    save(movie: Movie): void;
    getAllMovies(): Promise<Movie[]>;
}
