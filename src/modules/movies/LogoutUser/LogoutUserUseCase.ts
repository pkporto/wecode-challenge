import AppError from '../../../../helpers/AppError';
import { User } from '../../../entities/User';
import { IUserRepository } from '../../../repositories/IUserRepository';

export class LogoutUserUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute() {
        console.log('entrou no usecase');
        // // const userExists = await this.usersRepository.findByEmail(data.email);
        // if (!userExists) {
        //     throw new AppError('Usuário não existe.');
        // }

        // // console.log(`logout useruscase  ${userExists}`)
        // const usuario = await this.usersRepository.signin(
        //     data.email,
        //     data.password,
        // );
        // if (!usuario) {
        //     throw new AppError('Credenciais incorretas.');
        // }
        // // console.log(`teste da senha   ${usuario}`);
    }
}
