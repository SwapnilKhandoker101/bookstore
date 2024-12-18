import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRoutes } from "./modules/orders/order.route";

const app: Application = express();

//parser:
app.use(express.json());
app.use(cors());

// application routes:

app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API");
});

app.use("/api/orders", OrderRoutes);

export default app;
