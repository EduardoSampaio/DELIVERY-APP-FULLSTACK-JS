import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";

@Entity('order_items')
export class OrderItem {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column({ type: "varchar", nullable: false })
    public quantity: number;
    @Column({ type: "varchar", nullable: false })
    public productId: string;
    @Column({ type: "varchar", nullable: false })
    public orderId: string

    @ManyToOne(() => Order, order => order.id)
    order: Order
}