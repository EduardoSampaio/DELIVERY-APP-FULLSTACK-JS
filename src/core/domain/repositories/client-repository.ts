import { Client } from "../entities/client";

export interface ClientRepository {
    save(client: Client): Promise<void>;
    findByEmail(email: string): Promise<Client | null>;
}