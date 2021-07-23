import { Request, Response } from 'express';
import { LogoutUserUseCase } from './LogoutUserUseCase';
import jwt from 'jsonwebtoken';

// import endpoint from '../../../../endpoints.config';

export class LogoutUserController {
    constructor(private logoutUserUseCase: LogoutUserUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            await this.logoutUserUseCase.execute();

            return res.status(200).json({
                status: 200,
                message: 'Logout efetuado com sucesso.',
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Erro desconhecido.',
            });
        }
    }
}
