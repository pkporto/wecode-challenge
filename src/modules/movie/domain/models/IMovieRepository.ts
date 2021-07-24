import { Movie } from '../../infra/typeorm/entities/Movie.entity';

export interface IMovieRepository {
    findByName(name: string): Promise<Movie | undefined>;
    findById(id: number): Promise<Movie | undefined>;
    save(movie: Movie): void;
    getAllMovies(): Promise<Movie[]>;
}
