import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Product } from "./entity/Product";

AppDataSource.initialize()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.get("/users", async (req: Request, res: Response) => {
      const userRepository = connection.manager.getRepository(User);
      const users = await userRepository.find();
      res.status(200).send(users);
    });

    app.get("/users/:id", async (req: Request, res: Response) => {
      const { id } = req.params;
      console.log(id);
      const userRepository = connection.manager.getRepository(User);
      const user = await userRepository.findOneBy({ id: id });
      res.status(200).send(user);
    });

    app.get("/products", async (req: Request, res: Response) => {
      const productRepository = connection.manager.getRepository(Product);
      const products = await productRepository.find();
      res.status(200).send(products);
    });

    app.get("/products/:id", async (req: Request, res: Response) => {
      const { id } = req.params;
      console.log(id);
      const productRepository = connection.manager.getRepository(Product);
      const product = await productRepository.findOneBy({ id: id });
      res.status(200).send(product);
    });

    app.listen(3001);

    console.log(
      "Express server has started on port 3001. Open http://localhost:3001/users to see results"
    );
  })
  .catch((error) => console.log(error));
