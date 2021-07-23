import AppError from '@helpers/AppError';
// import { User } from '../infra/typeorm/entities/User';
import { IUserRepository } from '../domain/models/IUserRepository';
import { ILoginUserDTO } from './LoginUserDTO';

export class LoginUserUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute(data: ILoginUserDTO) {
        console.log('entrou no usecase');
        const userExists = await this.usersRepository.findByEmail(data.email);
        if (!userExists) {
            throw new AppError('Usuário não existe.');
        }

        // console.log(`login useruscase  ${userExists}`)
        const usuario = await this.usersRepository.signin(
            data.email,
            data.password,
        );
        if (!usuario) {
            throw new AppError('Credenciais incorretas.');
        }
        // console.log(`teste da senha   ${usuario}`);
    }
}
