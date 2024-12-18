import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);

router.get("/", ProductControllers.getAllProducts);

router.get("/:productId", ProductControllers.getSpecificProduct);

router.put("/:productId", ProductControllers.updateProductFromDB);
router.delete("/:productId", ProductControllers.deleteProductFromDB);

export const ProductRoutes = router;
