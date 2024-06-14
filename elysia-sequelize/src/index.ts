import { Elysia } from "elysia";
import { User, Product, WriteTest } from "../sequelize/models";

const app = new Elysia()
  .get("/users", async () => {
    return User.findAll().then((users) => users.map((user) => user.toJSON()));
  })
  .get("/users/:id", async ({ params: { id } }) => {
    return User.findOne({ where: { id: Number(id) } }).then((user) =>
      user?.toJSON(),
    );
  })
  .get("/products", async () => {
    return await Product.findAll().then((products) =>
      products.map((product) => product.toJSON()),
    );
  })
  .get("/products/:id", async ({ params: { id } }) => {
    return await Product.findOne({ where: { id: Number(id) } }).then(
      (product) => product?.toJSON(),
    );
  })
  .post("/WriteTest", async ({ body }) => {
    const write = await WriteTest.create({ name: body.name });
    return { id: write.id, name: write.name };
  })
  .listen(3001);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
