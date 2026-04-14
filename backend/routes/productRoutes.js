import { Router } from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} from "../controller/productController.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
