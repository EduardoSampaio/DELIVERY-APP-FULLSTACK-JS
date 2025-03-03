import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { OrderDeliveryman } from "./order-deliveryman"

@Entity('deliverymen')
export class Deliveryman {
    @PrimaryGeneratedColumn('uuid')
    public id: string
    @Column({ type: "varchar", nullable: false })
    public name: string
    @Column({ type: "varchar", nullable: false })
    public email: string
    @Column({ type: "varchar", nullable: false })
    public password: string
    @Column({ type: "varchar", nullable: true })
    public avatar: string
    @Column({ type: "date", default: () => "CURRENT_TIMESTAMP" })
    public createdAt: Date

    @OneToMany(() => OrderDeliveryman, orderDeliveryman => orderDeliveryman.deliverymanId)
    orderDeliveryman: OrderDeliveryman;
}