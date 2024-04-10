import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  getAllProducts,
  addAProduct,
  getProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/register-product").post(verifyJWT,upload.single("productImage"), addAProduct);
router.route("/get-product/:slug").get(getProduct);
router.route("/all-product").get(verifyJWT,getAllProducts);

export default router;
