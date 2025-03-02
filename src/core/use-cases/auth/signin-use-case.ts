import { ClientRepository } from "@/core/domain/repositories/client-repository";


export class SigninUseCase {
    constructor(
        private userRepository: ClientRepository
    ) {}

    async execute(email: string) {
        const user = await this.userRepository.findByEmail(email)
        return user
    }
}