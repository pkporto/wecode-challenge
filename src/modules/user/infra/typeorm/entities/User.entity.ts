import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column({nullable:true})
    watched!: number;

    constructor(
        params: { name: string; watched?: number },
        id?: string,
    ) {
        Object.assign(this, params);
    }

}
