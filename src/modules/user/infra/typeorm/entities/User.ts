import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import bcrypt from 'bcrypt';

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column()
    cpf!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    constructor(
        params: { name: string; cpf: string; password: string },
        id?: string,
    ) {
        Object.assign(this, params);
    }

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hashSync(this.password, 10);
    }
}
