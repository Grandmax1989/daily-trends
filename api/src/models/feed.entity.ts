import {Entity, ObjectID, ObjectIdColumn, Column, PrimaryGeneratedColumn, PrimaryColumn, BaseEntity} from "typeorm";
import {ObjectId} from'mongodb';


@Entity()
export class  Feed {

    @ObjectIdColumn()
    _id: ObjectId;

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

    @Column()
    createdAt?: Date;
}
