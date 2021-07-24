import { EntityRepository, getRepository } from 'typeorm';
import { User } from '../../infra/typeorm/entities/User.entity';
import { IUserRepository } from '../models/IUserRepository';


@EntityRepository(User)
export class UserRepository implements IUserRepository {

    async save(user: User) {
        try {
            await getRepository(User).save(user);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findByName(name: string): Promise<User | undefined> {
        try {
            const user = await getRepository(User).findOne({
                where: { name },
            });
            return user;
        } catch (error) {
            return error.message;
        }
    }

    async getAllUsers(): Promise<User[]>{
        try {
            const users = await getRepository(User).find(
                {
                    order:{
                        id: 'ASC',
                    }
                }
            );
            return users;
        } catch (error) {
            return error.message;
        }
    }
}
