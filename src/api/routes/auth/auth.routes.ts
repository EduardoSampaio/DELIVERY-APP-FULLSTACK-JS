import { FastifyInstance } from "fastify"
import { signinController } from "./signin.controller"
import { signupController } from "./signup.controller"


export async function authRoutes(app: FastifyInstance) {
    app.get('/signin', signinController)
    app.get('/signup', signupController)
} 