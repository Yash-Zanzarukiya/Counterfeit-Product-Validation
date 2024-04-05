import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    brand_name: {
      type: String,
      required: true,
    },
    product_id: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(mongooseAggregatePaginate);

export const Product = mongoose.model("Product", productSchema);
