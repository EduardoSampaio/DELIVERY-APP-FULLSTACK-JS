import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Status } from '../enums/status';
import { Client } from "./client"
import { OrderItem } from "./order-item"
import { OrderDeliveryman } from "./order-deliveryman"

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    public id: string
    @Column({ type: "varchar", nullable: false })
    public deliverymanId: string
    @Column({ type: "varchar", nullable: false })
    public clientId: string
    
    @Column({ type: "varchar", nullable: false })
    Status: string
    
    @Column({ type: "varchar", nullable: false })
    public deliveryCode: string

    @Column({ type: "date", default: () => "CURRENT_TIMESTAMP" })
    public createdAt: Date

    @Column({ type: "date", nullable: true })
    public deliveriedAt?: Date

    @Column({ type: "date", nullable: true })
    public canceledAt?: Date

    @ManyToOne(() => Client, client => client.orders)
    client: Client

    @OneToMany(() => OrderItem, orderItem => orderItem.orderId)
    orderItems: OrderItem[]

    @OneToMany(() => OrderDeliveryman, orderDeveliveryman => orderDeveliveryman.orderId)
    orderDeliveryman: OrderDeliveryman
}