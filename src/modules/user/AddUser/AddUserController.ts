import { Request, Response } from 'express';
import { AddUserUseCase } from './AddUserUseCase';

export class AddUserController {
    constructor(private AddUserUseCase: AddUserUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
       
            await this.AddUserUseCase.execute({
                name
            });

            return res.status(201).json({
                status: 201,
                message: 'Usuário cadastrado com sucesso.',
            });
       
    }
}
