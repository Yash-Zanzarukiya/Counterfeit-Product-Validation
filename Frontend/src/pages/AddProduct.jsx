import React from "react";
import { Container, ProductForm } from "../components/index";

function AddProduct() {
  return (
    <div className="w-full min-h-screen bg-black bg-gradient-to-r from-[#5f78d4] to-[#3657cd] flex items-center justify-center">
      <ProductForm />
    </div>
  );
}

export default AddProduct;
