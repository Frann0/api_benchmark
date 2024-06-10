const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
const port = 3001;

app.get("/users", async (req, res) => {
  const a = await prisma.user.findMany();
  res.status(200).send(a);
});

app.get("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const a = await prisma.user.findUnique({ where: { id } });
  res.status(200).send(a);
});

app.get("/products", async (req, res) => {
  const a = await prisma.product.findMany();
  res.status(200).send(a);
});

app.get("/products/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const a = await prisma.product.findUnique({ where: { id } });
  res.status(200).send(a);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
