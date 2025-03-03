import { SignupUseCase } from "@/core/use-cases/auth/signup-use-case";
import { FastifyReply, FastifyRequest } from "fastify";


export async function signupController(request: FastifyRequest, reply: FastifyReply) {
    const { username, email, password } = request.body;

    const signupUseCase = new SignupUseCase();

    await signupUseCase.execute({ username, email, password });
    return reply.status(200).send("Register")
} 