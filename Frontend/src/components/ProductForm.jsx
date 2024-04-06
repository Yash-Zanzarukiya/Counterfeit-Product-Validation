import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "./index";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductForm({ product }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      product_name: product?.product_name || "",
      brand_name: product?.brand_name || "",
      product_id: product?.product_id || "",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    let dbProduct;
    await appwriteService
      .addProduct({ ...data })
      .then((blob) => {
        console.log(blob);
        return blob?.json();
      })
      .then((res) => {
        dbProduct = res?.data;
      })
      .catch((err) => console.log("ProductForm :: Error accured while adding Product :: ", err));

    if (dbProduct) {
      navigate(`/qrcode/${dbProduct.product_id}`);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className={`mx-auto w-2/5 bg-gray-100 rounded-xl p-8 border border-black/10`}>
        <h2 className="text-center text-3xl font-bold leading-tight mb-2">Add Product</h2>

        <form
          onSubmit={handleSubmit(submit)}
          enctype="multipart/form-data"
          className="flex items-center justify-center flex-wrap"
        >
          <div className="w-full px-2 flex flex-col items-center justify-center">
            <Input
              label="Product Name :"
              placeholder="Product Name"
              className="mb-4"
              required
              {...register("product_name", { required: true })}
            />
            <Input
              label="Product Id :"
              placeholder="Product Id"
              className="mb-4"
              required
              {...register("product_id", { required: true })}
            />
            <Input
              label="Brand Name :"
              placeholder="Brand Name"
              className="mb-4"
              required
              {...register("brand_name", { required: true })}
            />
            <Input
              label="Description :"
              placeholder="Some brief description about Product"
              className="mb-4"
              {...register("description", { required: false })}
            />
            <Input
              type="date"
              label="Manufacturing Date :"
              placeholder="Manufacturing Date"
              className="mb-4"
              {...register("manufacturingDate", { required: false })}
            />
            <Input
              type="date"
              label="Expiry Date :"
              placeholder="Expiry Date"
              className="mb-4"
              {...register("expiryDate", { required: false })}
            />
            <Input
              label="Product Image :"
              type="file"
              className="mb-4"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              {...register("productImage", { required: false })}
            />
            <Button type="submit" bgColor={product ? "bg-green-500" : undefined} className="w-1/3">
              {product ? "Update" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
