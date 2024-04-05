import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (!products) throw new APIError(400, "No Product found");

  return res
    .status(200)
    .json(new APIResponse(200, products, "All Product Sent Successfully"));
});

const addAProduct = asyncHandler(async (req, res) => {
  const { product_name, brand_name, product_id, slug } = req.body;

  const product = await Product.create({
    product_name,
    brand_name,
    product_id,
    slug,
  });

  if (!product) {
    throw new APIError(500, "Error while Publishing Video");
  }

  return res
    .status(200)
    .json(new APIResponse(200, product, "Product Added successfully"));
});

const getProduct = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    throw new APIError(400, "Slug not found");
  }

  const product = await Product.find({ slug });

  if (!product) throw new APIError(400, "No video found");

  const isGenuine = true;

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        { ...product, isGenuine },
        "Product Sent Successfully"
      )
    );
});

export { getAllProducts, addAProduct, getProduct };
