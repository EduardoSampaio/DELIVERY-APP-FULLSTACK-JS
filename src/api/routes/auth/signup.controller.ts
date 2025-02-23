import { FastifyReply, FastifyRequest } from "fastify";


export async function signupController(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send("Register")
} 