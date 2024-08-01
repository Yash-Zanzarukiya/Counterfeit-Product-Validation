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
    const string = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}-${
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
      <div className=" w-full min-h-screen flex items-center justify-center">
        <h1 className="text-center text-4xl">
          <svg
            aria-hidden="true"
            role="status"
            className="mr-2 inline-block h-9 w-9 animate-spin text-black-500"
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
              fill="#FFF"
            ></path>
          </svg>
          Verifying Product Authenticity...
        </h1>
      </div>
    );

  return product && product.isGenuine ? (
    <div className="w-full bg-black text-white min-h-screen flex align-middle justify-center">
      <div className=" text-center text-3xl w-1/2 flex align-middle justify-center flex-col gap-5">
        <div className=" mt-32 flex align-middle justify-center flex-col gap-3">
          <span className="flex mb-6 align-middle justify-center">
            <img className=" font-bold h-36 rounded" src={product && product[0]?.productImage} />
          </span>
          <div className=" mb-2">
            <h1 className=" text-5xl">
              <span className=" text-green-500">Genuine Product</span>
            </h1>
          </div>
          <span>
            Product Name:
            <span className="text-[#F9C747] font-bold"> {product && product[0]?.product_name}</span>
          </span>
          <span>
            Brand ID:
            <span className="text-[#F9C747] font-bold"> {product && product[0]?.brand}</span>
          </span>
          <span>
            Product ID:
            <span className="text-[#F9C747] font-bold"> {product && product[0]?.product_id}</span>
          </span>
          <span>
            MRP:
            <span className="text-[#F9C747] font-bold"> {product && product[0]?.MRP}</span>
          </span>
          <span>
            Registered At:
            <span className="text-[#F9C747] font-bold ml-1">
              {product &&
                `${getFormattedDate(product[0]?.createdAt)} ${getFormattedTime(
                  product[0]?.createdAt
                )} IST`}
            </span>
          </span>
          <span>
            Manufacturing Date:
            <span className="text-[#F9C747] font-bold ml-1">
              {product && getFormattedDate(product[0]?.manufacturingDate)}
            </span>
          </span>
          <span>
            Expiry Date:
            <span className="text-[#F9C747] font-bold ml-1">
              {product && getFormattedDate(product[0]?.expiryDate)}
            </span>
          </span>
          <span>
            Product Description:
            <span className="text-[#F9C747] font-bold ml-1">{product && product[0]?.description}</span>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <FakeProduct />
  );
}
