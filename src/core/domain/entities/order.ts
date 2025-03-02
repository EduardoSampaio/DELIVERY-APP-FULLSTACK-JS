import { Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    public id: string
    public deliverymanId: string
    public clientId: string
    public status: string
    public total: number
    public deliveryCode: string
    public createdAt: Date
    public deliveriedAt?: Date
    public canceledAt?: Date
}