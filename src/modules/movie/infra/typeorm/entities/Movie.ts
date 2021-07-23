import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Movies')
export class Movie {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column()
    genre!: string;

    @Column()
    watchers!: number;

    constructor(
        params: { name: string; genre: string; watchers?: number },
        id?: string,
    ) {
        Object.assign(this, params);
    }

}
