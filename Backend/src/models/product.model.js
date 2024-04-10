import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    productImage: {
      type: String,
    },
    manufacturingDate: {
      type: String,
    },
    expiryDate: {
      type: String,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      required: true,
    },
    MRP: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(mongooseAggregatePaginate);

export const Product = mongoose.model("Product", productSchema);
