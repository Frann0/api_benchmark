const express = require("express");
const { User, Product } = require("./sequelize/models");

const app = express();
const port = 3001;

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.status(200).send(users);
});

app.get("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await User.findOne({ where: { id: Number(id) } }).then((user) =>
    user.toJSON()
  );
  res.status(200).send(user);
});

app.get("/products", async (req, res) => {
  const products = await Product.findAll();
  res.status(200).send(products);
});

app.get("/products/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await Product.findOne({ where: { id: Number(id) } }).then(
    (product) => product.toJSON()
  );
  res.status(200).send(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
