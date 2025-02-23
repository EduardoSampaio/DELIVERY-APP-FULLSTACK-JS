import { UserRepository } from "@/core/domain/repositories/user-repository";


export class SigninUseCase {
    constructor(
        private userRepository: UserRepository
    ) {}

    async execute(email: string) {
        const user = await this.userRepository.findByEmail(email)
        return user
    }
}