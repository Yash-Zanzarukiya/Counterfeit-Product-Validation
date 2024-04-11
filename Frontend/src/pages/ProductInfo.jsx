import { useEffect, useState } from "react";
import endPointService from "../backend/config";
import { useParams } from "react-router-dom";
import { FakeProduct } from "../components";
import { getProduct } from "../backend/contract";

export default function ProductInfo() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const getProductInfo = async () => {
      await getProduct(slug).then((data) => {
        if (data[0]) {
          const getFromDB = async () => {
            await endPointService
              .getProduct(slug)
              .then((blob) => blob.json())
              .then(async (res) => {
                if (res.success) {
                  setProduct(res.data);
                  setIsLoading(false);
                }
              });
          };
          getFromDB();
        } else setIsLoading(false);
      });
    };
    getProductInfo();
  }, [slug]);

  function getFormattedDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const string = `${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}-${
      date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    }-${date.getFullYear() < 10 ? "0" + date.getFullYear() : date.getFullYear()}`;
    return string;
  }

  function getFormattedTime(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const string = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;
    return string;
  }

  if (isLoading)
    return (
      <div className=" w-full h-screen text-center text-4xl">Verifying Product Authenticity...</div>
    );

  return product && product.isGenuine ? (
    <div className="w-ful flex align-middle justify-center">
      <div className=" text-center text-3xl w-1/2 flex align-middle justify-center flex-col gap-5">
        <div className=" mt-36 flex align-middle justify-center flex-col gap-3">
          <span className="flex align-middle justify-center">
            <img className=" font-bold h-36 rounded" src={product && product[0]?.productImage} />
          </span>
          <span>
            Product Name:
            <span className=" font-bold"> {product && product[0]?.product_name}</span>
          </span>
          <span>
            Brand ID:
            <span className=" font-bold"> {product && product[0]?.brand}</span>
          </span>
          <span>
            Product ID:
            <span className=" font-bold"> {product && product[0]?.product_id}</span>
          </span>
          <span>
            MRP:
            <span className=" font-bold"> {product && product[0]?.MRP}</span>
          </span>
          <span>
            Registered At:
            <span className=" font-bold ml-1">
              {product &&
                `${getFormattedDate(product[0]?.createdAt)} ${getFormattedTime(
                  product[0]?.createdAt
                )} IST`}
            </span>
          </span>
          <span>
            Manufacturing Date:
            <span className=" font-bold ml-1">
              {product && getFormattedDate(product[0]?.manufacturingDate)}
            </span>
          </span>
          <span>
            Expiray Date:
            <span className=" font-bold ml-1">
              {product && getFormattedDate(product[0]?.expiryDate)}
            </span>
          </span>
          <span>
            Product Description:
            <span className=" font-bold ml-1">{product && product[0]?.description}</span>
          </span>
        </div>
        <div>
          <h1 className=" text-4xl">
            <span className=" text-green-500">Genuine Product</span>
          </h1>
        </div>
      </div>
    </div>
  ) : (
    <FakeProduct />
  );
}
