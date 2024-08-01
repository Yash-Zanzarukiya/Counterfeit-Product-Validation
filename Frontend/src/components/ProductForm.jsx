import React, { useCallback, useEffect, useState } from "react";
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

  const [isRegistering, setIsRegistering] = useState(false);

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
    setIsRegistering(true);
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
        } else setIsRegistering(false);
      };
      regProduct();
    });
  };

  if (isRegistering)
    return (
      <div className="flex flex-col items-center justify-center w-full  pt-16">
        <h1 className=" text-4xl mb-8">
          <svg
            aria-hidden="true"
            role="status"
            className="mr-2 mb-2 inline-block h-8 w-8 animate-spin text-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            ></path>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#000"
            ></path>
          </svg>
          <span className=" ml-1">Registering Product...</span>
        </h1>
        <h1 className=" text-4xl">Please Confirm the transaction from Metamask</h1>
      </div>
    );

  return (
    <div className="flex items-center justify-center w-full  pt-16">
      <div className={`mx-auto w-2/5 bg-gray-100 rounded p-6 pb-3 px-8 border border-black/10`}>
        <h5 className="text-2xl font-bold bg-[#F9C747] p-2 my-2 rounded text-center mb-6 uppercase">
          Add Product
        </h5>

        <form
          onSubmit={handleSubmit(submit)}
          enctype="multipart/form-data"
          className="flex items-center justify-center flex-wrap"
        >
          <div className="w-full px-2 flex flex-col items-center justify-center">
            <Input
              label="Product Name"
              placeholder="Product Name"
              className="mb-2"
              required
              {...register("product_name", { required: true })}
            />
            <Input
              label="Product Id"
              placeholder="Product Id"
              className="mb-2"
              required
              {...register("product_id", { required: true })}
            />
            <Input
              label="MRP"
              placeholder="Enter MRP"
              className="mb-2"
              required
              {...register("MRP", { required: true })}
            />
            <Input
              label="Description"
              placeholder="Some brief description about Product"
              className="mb-2"
              {...register("description", { required: false })}
            />
            <Input
              type="date"
              label="Manufacturing Date"
              placeholder="Manufacturing Date"
              className="mb-2"
              {...register("manufacturingDate", { required: false })}
            />
            <Input
              type="date"
              label="Expiry Date (if applicable)"
              placeholder="Expiry Date"
              className="mb-2"
              {...register("expiryDate", { required: false })}
            />
            <Input
              label="Product Image"
              type="file"
              className="mb-2"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              {...register("productImage", { required: false })}
            />
            <button
              type="submit"
              className="btn w-1/3 px-5 my-2 mt-3 py-2 rounded relative inline-flex items-center justify-start overflow-hidden transition-all duration-[500ms] bg-blue-600  tracking-wide group"
            >
              <span className="w-0 h-0 rounded-3xl bg-[#000] absolute -bottom-5 -left-5 ease-out duration-[400ms] transition-all group-hover:w-64 group-hover:h-64 -z-1"></span>
              <span className="w-full text-lg flex items-center justify-center text-white transition-colors duration-[350ms] ease-in-out group-hover:text-[#F9C747]  z-20">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
