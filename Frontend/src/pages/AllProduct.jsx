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
        }
      });
  }, []);

  return (
    <div className="w-full py-8">
      <div className=" size-full flex flex-wrap align-middle justify-center">
        <table className="w-fit text-2xl border-separate border-spacing-2 border border-slate-500">
          <tr>
            <th className="border border-slate-400 text-center p-3 px-6">Product ID</th>
            <th className="border border-slate-400 text-center p-3  px-6">Product Name</th>
            <th className="border border-slate-400 text-center p-3  px-6">Brand ID</th>
            <th className="border border-slate-400 text-center p-3  px-6">View</th>
          </tr>
          <tbody>{products && products.map((product) => <ProductRow {...product} />)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProducts;
