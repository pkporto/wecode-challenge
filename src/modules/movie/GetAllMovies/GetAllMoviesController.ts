import { Request, Response } from 'express';
import { GetAllMoviesUseCase } from './GetAllMoviesUseCase';

export class GetAllMoviesController {
    constructor(
        private getAllMoviesMoviesUseCase: GetAllMoviesUseCase,
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            console.log('Get All Movies Controller');
            const movies =
                await this.getAllMoviesMoviesUseCase.execute(
                );

            return res.status(200).json({
                status: 200,
                message: 'Todos os filmes.',
                data: movies,
            });
        } catch (error) {
            return res.status(400).json({
                message: 'controller ' + error.message || 'Erro desconhecido.',
            });
        }
    }
}
