import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: "varchar", nullable: false })
    firstname: string

    @Column({ type: "varchar", nullable: true })
    lastname: string

    @Column({ type: "varchar", unique: true })
    email: string

    @Column({ type: "varchar", nullable: false })
    password: string

    @Column({ type: "varchar", nullable: true })
    avatar: string

    @Column({ type: "date", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date
}