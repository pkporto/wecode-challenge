import { User } from '@modules/user/infra/typeorm/entities/User.entity';

export interface IUserRepository {
    findByName(name: string): Promise<User | undefined>;
    save(user: User): void;
    getAllUsers(): Promise<User[]>;
}
