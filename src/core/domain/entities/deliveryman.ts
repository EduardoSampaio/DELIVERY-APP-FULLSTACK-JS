import { Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('deliverymen')
export class Deliveryman {
    @PrimaryGeneratedColumn('uuid')
    public id: string
    public name: string
    public email: string
    public password: string
    public avatar: string
    public createdAt: Date
}