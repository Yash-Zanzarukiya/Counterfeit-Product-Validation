import React from "react";
import { Link } from "react-router-dom";

function ProductRow({ product_name, brand, product_id,expiryDate }) {
  return (
    <tr key={Date.now()}>
      <td className="rounded-t border border-slate-400 text-center p-2 px-6">{product_id}</td>
      <td className="rounded-t border border-slate-400 text-center p-2 px-6">{product_name}</td>
      <td className="rounded-t border border-slate-400 text-center p-2 px-6">{brand}</td>
      <td className="rounded-t border border-slate-400 text-center p-2 px-6">{expiryDate}</td>
      <td className="rounded-t border border-slate-400 text-center text-blue-400">
        <Link to={`/product/${product_id}`}>View</Link>
      </td>
    </tr>
  );
}

export default ProductRow;
