import React from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode";

function QrCode() {
  const { slug } = useParams();
  let qrurl;

  return (
    <div className="flex justify-center align-middle">
      <div className=" mt-56 relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96  h-fit">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-80">
          {QRCode.toDataURL(
            `http://localhost:5173/product/${slug}`,
            function (err, url) {
              qrurl = url;
            }
          )}
          <img src={qrurl} alt="qr-code" className="w-full" />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            QR Code
          </h4>
        </div>
      </div>
    </div>
  );
}

export default QrCode;
