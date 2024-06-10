import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Product } from "./entity/Product";
import { Elysia } from "elysia";

AppDataSource.initialize()
  .then((connection) => {
    const app = new Elysia()
      .get("/users", async () => {
        const userRepository = connection.manager.getRepository(User);
        return await userRepository.find();
      })
      .get("/users/:id", async ({ params: { id } }) => {
        const userRepository = connection.manager.getRepository(User);
        return await userRepository.findOne(Number(id));
      })
      .get("/products", async () => {
        const productRepository = connection.manager.getRepository(Product);
        return await productRepository.find();
      })
      .get("/products/:id", async ({ params: { id } }) => {
        const productRepository = connection.manager.getRepository(Product);
        return await productRepository.findOne(Number(id));
      })
      .listen(3001);

    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
    );
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
