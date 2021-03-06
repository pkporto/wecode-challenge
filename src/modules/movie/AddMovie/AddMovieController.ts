import { Request, Response } from 'express';
import { AddMovieUseCase } from './AddMovieUseCase';

export class AddMovieController {
    constructor(private AddMovieUseCase: AddMovieUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, genre} = req.body;
            await this.AddMovieUseCase.execute({
                name,
                genre
            });

            return res.status(201).json({
                status: 201,
                message: 'Filme cadastrado com sucesso.',
            });
        
        }
}
