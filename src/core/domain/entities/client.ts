import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";
import { Address } from "./address";

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column({ type: "varchar", nullable: false })
    username: string

    @Column({ type: "varchar", unique: true })
    email: string

    @Column({ type: "varchar", nullable: false })
    password: string

    @Column({ type: "varchar", nullable: true })
    avatar?: string

    @Column({ type: "date", default: () => "CURRENT_TIMESTAMP" })
    createdAt?: Date

    @OneToMany(() => Order, order => order.clientId)
    orders?: Order[]

    @OneToMany(() => Address, address => address.clientId)
    addresses?: Address[]
}