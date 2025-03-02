import { Client } from "../entities/client";

export interface ClientRepository {
    save(user: Client): Promise<void>;
    findByEmail(email: string): Promise<Client | null>;
}