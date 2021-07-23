import { User } from '../../modules/User/infra/typeorm/entities/User';

export interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    signin(email: string, password: string): Promise<User | undefined>;
    save(user: User): void;
}
