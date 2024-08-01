import React, { useState, useEffect } from "react";
import { ProductRow } from "../components/index";
import backendService from "../backend/config";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    backendService
      .getAllProducts([])
      .then((blob) => blob.json())
      .then((products) => {
        if (products) {
          setProducts(products.data);
          console.log("products.data: ", products.data);
        }
      });
  }, []);

  return (
    <div className="w-full min-h-screen mt-12 py-8">
      <div className=" size-full flex flex-wrap align-middle justify-center">
        <table className="w-fit text-2xl p-2 rounded bg-black text-white border-separate border-spacing-2 border-slate-500">
          <tr className="text-black">
            <th className="rounded border border-slate-400 bg-[#F9C747] text-center p-3 px-6">
              Product ID
            </th>
            <th className="rounded border border-slate-400 bg-[#F9C747]  text-center p-3  px-6">
              Product Name
            </th>
            <th className="rounded border border-slate-400  bg-[#F9C747] text-center p-3  px-6">
              Brand ID
            </th>
            <th className="rounded border border-slate-400 bg-[#F9C747]  text-center p-3  px-6">
              Expiry Date
            </th>
            <th className="rounded border border-slate-400 bg-[#F9C747]  text-center p-3  px-6">View</th>
          </tr>
          <tbody className="">{products && products.map((product) => <ProductRow {...product} />)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProducts;
