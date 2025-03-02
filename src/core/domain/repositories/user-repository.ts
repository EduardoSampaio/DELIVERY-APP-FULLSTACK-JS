import { User } from "../entities/client";

export interface UserRepository {
    save(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
}