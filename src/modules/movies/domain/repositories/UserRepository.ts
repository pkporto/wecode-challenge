import { EntityRepository, getRepository } from 'typeorm';
import { User } from '../../infra/typeorm/entities/User';
import { IUserRepository } from '../../../../app/repositories/IUserRepository';

import bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User | undefined> {
        try {
            const user = await getRepository(User).findOne({
                where: { email: email },
            });
            return user;
        } catch (error) {
            return error.message;
        }
    }

    async save(user: User): Promise<void> {
        console.log(`save ${user.email}`);

        try {
            await getRepository(User).save(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    async signin(email: string, password: string): Promise<User | undefined> {
        try {
            const userInfo = await getRepository(User).findOne({
                where: { email },
            });

            const login = await bcrypt.compare(password, userInfo!.password);

            if (!login) {
                return undefined;
            }

            return userInfo!;
        } catch (error) {
            return error.message;
        }
    }
}
