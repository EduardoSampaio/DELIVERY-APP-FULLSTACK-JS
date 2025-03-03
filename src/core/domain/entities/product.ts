import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", nullable: false })
    name: string;
    @Column({ type: "varchar", nullable: false })
    description: string;
    @Column({ type: "decimal", nullable: false })
    price: number;
}