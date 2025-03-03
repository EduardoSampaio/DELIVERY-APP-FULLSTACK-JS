import { app } from "./app"
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => console.log("Banco de dados conectado!"))
    .catch((error) => console.log("Erro ao conectar ao banco:", error));

const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()