import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product} from "./entity/Product"
import { Order } from "./entity/Orders"
import { WriteTest } from "./entity/WriteTest"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root1234",
    database: "test_api",
    synchronize: false,
    logging: false,
    entities: [User, Product, Order, WriteTest],
    migrations: [],
    subscribers: [],
})
