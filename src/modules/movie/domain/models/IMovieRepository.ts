import { Movie } from '@modules/movie/infra/typeorm/entities/Movie';

export interface IMovieRepository {
    findByName(name: string): Promise<Movie | undefined>;
    save(movie: Movie): void;
    getAllMovies(): Promise<Movie[]>;
}
