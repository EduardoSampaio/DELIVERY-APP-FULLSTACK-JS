import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn()
    public id: number;
    public cep: string;
    public street: string;
    public number: string;
    public complement: string;
    public neighborhood: string;
    public city: string;
    public state: string;
    public country: string;
}