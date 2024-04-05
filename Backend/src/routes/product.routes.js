import { Router } from "express";
import {
  getAllProducts,
  addAProduct,
  getProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/register-product").post(addAProduct);
router.route("/get-product/:slug").get(getProduct);
router.route("/all-product").get(getAllProducts);

export default router;
