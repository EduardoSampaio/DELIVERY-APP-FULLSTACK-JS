import { PrimaryGeneratedColumn } from "typeorm";

export class OrderedItem {
    @PrimaryGeneratedColumn()
    public id: number;
    public quantity: number;
    public productId: string;
}