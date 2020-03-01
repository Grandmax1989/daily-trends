import {Entity, ObjectID, ObjectIdColumn, Column, PrimaryGeneratedColumn, PrimaryColumn, BaseEntity} from "typeorm";
import { uuid } from 'uuidv4';
import {ObjectId} from'mongodb';


@Entity()
export class  Feed extends BaseEntity {

    @ObjectIdColumn()
    _id: ObjectId | undefined;

    @Column ({
        length: 300
    })
    title?: string;

    @Column()
    body?: string;

    @Column()
    image?: string;

    @Column()
    source?: string;

    @Column()
    publisher?: string;

}
