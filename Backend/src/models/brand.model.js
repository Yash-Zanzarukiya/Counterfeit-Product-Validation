import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    licenceNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Brand = mongoose.model("Brand", brandSchema);
