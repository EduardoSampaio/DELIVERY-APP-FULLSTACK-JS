import { Order } from "./order";
import { Deliveryman } from './deliveryman';
import { Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('order_deliveryman')
export class OrderDeliveryman {
    @PrimaryColumn("uuid")
    orderId: string;
    @PrimaryColumn("uuid")
    deliverymanId: string;

    @ManyToOne(() => Order, order => order.id)
    order: Order;
    @ManyToOne(() => Deliveryman, deliveryman => deliveryman.id)
    deliveryman: Deliveryman;
}