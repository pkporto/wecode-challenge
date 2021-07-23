import { EntityRepository, getRepository } from 'typeorm';
import { Movie } from '../../infra/typeorm/entities/Movie';
import { IMovieRepository } from '../models/IMovieRepository';


@EntityRepository(Movie)
export class MovieRepository implements IMovieRepository {

    async save(movie: Movie) {
        try {
            await getRepository(Movie).save(movie);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findByName(name: string): Promise<Movie | undefined> {
        try {
            const user = await getRepository(Movie).findOne({
                where: { name },
            });
            return user;
        } catch (error) {
            return error.message;
        }
    }

    async getAllMovies(): Promise<Movie[]>{
        try {
            const movies = await getRepository(Movie).find(
                {
                    order:{
                        id: 'ASC',
                    }
                }
            );
            return movies;
        } catch (error) {
            return error.message;
        }
    }
}
