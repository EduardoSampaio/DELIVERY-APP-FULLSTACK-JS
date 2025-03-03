import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client";

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column({ type: "varchar", nullable: false })
    public cep: string;
    @Column({ type: "varchar", nullable: false })
    public number: string;
    @Column({ type: "varchar", nullable: false })
    public complement: string;
    @Column({ type: "varchar", nullable: false })
    public neighborhood: string;
    @Column({ type: "varchar", nullable: false })
    public city: string;
    @Column({ type: "varchar", nullable: false })
    public state: string;
    @Column({ type: "varchar", nullable: false })
    public country: string;
    @Column({ type: "varchar", nullable: false })
    public clientId: string

    @ManyToOne(() => Client, client => client.id)
    client: Client
}