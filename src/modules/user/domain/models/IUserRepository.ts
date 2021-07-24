import { User } from '../../infra/typeorm/entities/User.entity';

export interface IUserRepository {
    findByName(name: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
    save(user: User): void;
    getAllUsers(): Promise<User[]>;
}
