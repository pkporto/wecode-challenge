import { Request, Response } from 'express';
import { AddWatcherUseCase } from './AddWatcherUseCase';

export class AddWatcherController {
    constructor(private AddWatcherUseCase: AddWatcherUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id, movie_id} = req.body;
      
            await this.AddWatcherUseCase.execute({
                user_id,
                movie_id
            });
            //it will only return if everything is ok    
            return res.status(201).json({
                status: 201,
                message: 'Visualização cadastrada com sucesso.',
            });
       
    }
}
