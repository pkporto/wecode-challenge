import { Request, Response } from 'express';
import { GetAllUsersUseCase } from './GetAllUsersUseCase';

export class GetAllUsersController {
    constructor(
        private getAllUsersUsersUseCase: GetAllUsersUseCase,
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const users =
                await this.getAllUsersUsersUseCase.execute(
                );

            return res.status(200).json({
                status: 200,
                message: 'Todos os usuários.',
                data: users,
            });
        } catch (error) {
            return res.status(400).json({
                message: 'controller ' + error.message || 'Erro desconhecido.',
            });
        }
    }
}
