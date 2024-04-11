import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "./index";
import backendService from "../backend/config";
import { useNavigate } from "react-router-dom";
import { registerProduct } from "../backend/contract";
import { useSelector, useDispatch } from "react-redux";
import authService from "../backend/auth";
import { login, logout } from "../app/authSlice";

export default function ProductForm({ product }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      product_name: product?.product_name || "",
      MRP: product?.MRP || "",
      product_id: product?.product_id || "",
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((blob) => blob.json())
      .then((userData) => {
        if (userData) {
          dispatch(login(userData.data));
        } else {
          dispatch(logout());
        }
      });
  }, []);

  const userdata = useSelector((state) => state.auth.userData);
  const brand_id = userdata?._id;

  const navigate = useNavigate();

  const submit = async (data) => {
    let dbProduct;
    await registerProduct(data.product_id, data.product_name, brand_id).then((res) => {
      const regProduct = async () => {
        await backendService
          .addProduct({ ...data })
          .then((blob) => {
            return blob?.json();
          })
          .then((res) => {
            if (res.success) {
              dbProduct = res?.data;
            }
          })
          .catch((err) =>
            console.log("ProductForm :: Error accured while adding Product :: ", err)
          );

        if (dbProduct) {
          navigate(`/qrcode/${dbProduct.product_id}`);
        }
      };
      regProduct();
    });
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
              label="MRP :"
              placeholder="Enter MRP"
              className="mb-4"
              required
              {...register("MRP", { required: true })}
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
              label="Expiry Date (if applicable) :"
              placeholder="Expiry Date"
              className="mb-4"
              {...register("expiryDate", { required: false })}
            />
            <Input
              label="Product Image :"
              type="file"
              className="mb-4"
              // accept="image/png, image/jpg, image/jpeg, image/gif"
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
