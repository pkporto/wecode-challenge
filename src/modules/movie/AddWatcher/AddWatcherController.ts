import { Request, Response } from 'express';
import { AddWatcherUseCase } from './AddWatcherUseCase';

export class AddWatcherController {
    constructor(private AddWatcherUseCase: AddWatcherUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id, movie_id} = req.body;
        // try {
            await this.AddWatcherUseCase.execute({
                user_id,
                movie_id
            });

            return res.status(201).json({
                status: 201,
                message: 'Visualização cadastrada com sucesso..',
            });
        // } catch (error) {
        //     return res.status(400).json({
        //         message: error.message || 'Erro desconhecido.',
        //     });
        // }
    }
}
