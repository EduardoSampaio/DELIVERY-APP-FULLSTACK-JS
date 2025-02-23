import { FastifyReply, FastifyRequest } from "fastify";


export async function signinController(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({ status: "ok" })
} 