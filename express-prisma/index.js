const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
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

app.post("/WriteTest", async (req, res) => {
  const { name } = req.body;
  const a = await prisma.writeTest.create({
    data: { name },
  });
  res.status(201).send(a);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
