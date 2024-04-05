import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "./index";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      product_name: post?.product_name || "",
      brand_name: post?.brand_name || "",
      product_id: post?.product_id || "",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    console.log("Creating post...");
    let dbPost = "aj8d5x";
    await appwriteService
      .addProduct({ ...data })
      .then((blob) => blob.json())
      .then((res) => {
        dbPost = res.data;
      })
      .catch((err) => console.log("Error Accured"));
    console.log("Creating post :: responded\n");

    if (dbPost) {
      navigate(`/qrcode/${dbPost.product_id}`);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className={`mx-auto w-1/2 bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <h2 className="text-center text-2xl font-bold leading-tight">Add Product</h2>

        <form
          onSubmit={handleSubmit(submit)}
          className="flex items-center justify-center flex-wrap"
        >
          <div className="w-full px-2 flex flex-col items-center justify-center">
            {console.log("Inside Post Form")}
            <Input
              label="Product Name :"
              placeholder="Product Name"
              className="mb-4"
              {...register("product_name", { required: true })}
            />
            <Input
              label="Brand Name :"
              placeholder="Brand Name"
              className="mb-4"
              {...register("brand_name", { required: true })}
            />
            <Input
              label="Product Id :"
              placeholder="Product Id"
              className="mb-4"
              {...register("product_id", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-1/3">
              {post ? "Update" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}