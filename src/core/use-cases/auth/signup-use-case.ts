import { ClientRepository } from "@/core/domain/repositories/client-repository"

interface SignupRequest {
    username: string
    email: string
    password: string
}


export class SignupUseCase {
    constructor(
        private clientRepository: ClientRepository
    ) { }

    async execute({username, email, password}: SignupRequest) {
        await this.clientRepository.save({
           username,
           email,
           password
        });
    }
}	