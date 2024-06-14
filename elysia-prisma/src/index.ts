import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Elysia()
  .get("/users", () => {
    return prisma.user.findMany();
  })
  .get("/users/:id", ({ params: { id } }) => {
    return prisma.user.findUnique({ where: { id: Number(id) } });
  })
  .get("/products", () => {
    return prisma.product.findMany();
  })
  .get("/products/:id", ({ params: { id } }) => {
    return prisma.product.findUnique({ where: { id: Number(id) } });
  })
  .post("/WriteTest", ({ body }) => {
    return prisma.writeTest.create({ data: body });
  })
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
