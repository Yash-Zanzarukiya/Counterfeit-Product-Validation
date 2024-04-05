import { useEffect, useState } from "react";
import endPointService from "../appwrite/config";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
  const [product, setProduct] = useState({});
  const { slug } = useParams();
  console.log("Initial slug : " + slug);

  function getFormatedDate(dateString) {
    const date = new Date(dateString);
    const string = `${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}-${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }-${date.getFullYear() < 10 ? "0" + date.getFullYear() : date.getFullYear()} | ${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    } IST`;
    return string;
  }

  useEffect(() => {
    const getProduct = async () => {
      console.log("In function slug : " + slug);
      await endPointService
        .getProduct(slug)
        .then((blob) => blob.json())
        .then((res) => {
          console.log("Res.data : ");
          console.log(res);
          setProduct(res.data);
        });
    };
    getProduct();
  }, [slug]);

  return (
    // Product name, Brand Name, Product Id, Is Genuine
    <div className="w-full h-96 flex align-middle justify-center">
      <div className="text-3xl w-1/2 flex align-middle justify-center flex-col gap-5">
        <div className="flex align-middle justify-center flex-col gap-3">
          {console.log("Product : " + { ...product })}
          <span>
            Product Name:
            <span className=" font-bold"> {product && product[0]?.product_name}</span>
          </span>
          <span>
            Brand Name:
            <span className=" font-bold"> {product && product[0]?.brand_name}</span>
          </span>
          <span>
            Product ID:
            <span className=" font-bold"> {product && product[0]?.product_id}</span>
          </span>
          <span>
            Registered At:
            <span className=" font-bold"> {product && getFormatedDate(product[0]?.createdAt)}</span>
          </span>
        </div>
        <div>
          <h1>
            {product.isGenuine ? (
              <span className=" text-green-500">✅ Genuine Product</span>
            ) : (
              <span className=" text-red-600">❌ Product is not Genuine</span>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}
