import React from "react";
import { Link } from "react-router-dom";

function ProductRow({ product_name, brand_name, product_id }) {
  return (
    <tr key={Date.now()}>
      <td className="border border-slate-400 text-center p-2">{product_id}</td>
      <td className="border border-slate-400 text-center p-2">{product_name}</td>
      <td className="border border-slate-400 text-center p-2">{brand_name}</td>
      <td className="border border-slate-400 text-center bg-blue-400/25">
        <Link to={`/product/${product_id}`}>View</Link>
      </td>
    </tr>
  );
}

export default ProductRow;
