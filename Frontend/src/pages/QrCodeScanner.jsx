import React, { useEffect, useState } from "react";
import { useNavigate, redirect, Navigate } from "react-router-dom";
import { QRScanner } from "../components";

function QrCodeScanner() {
  let [qrURL, setQrURL] = useState("");

  const navigate = useNavigate();

  const getQrURL = (url) => {
    setQrURL(url);
  };

  useEffect(() => {
    if (!qrURL) return;
    testURL(qrURL);
  }, [qrURL]);

  function matchURL(urlString) {
    const localhostRegex = /^http:\/\/localhost:5173/;
    return localhostRegex.test(urlString);
  }

  function testURL(urlString) {
    if (matchURL(urlString)) {
      window.location = urlString;
    } else {
      navigate("/fake-product");
    }
  }

  return (
    <div className=" mt-32 w-screen h-screen flex justify-center align-middle">
      <div className="w-[600px] h-fit relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className=" mx-4 text-gray-700 bg-white  rounded-xl">
          <QRScanner getURL={getQrURL} />
        </div>
        <div className=" pb-8 text-center">
          <h4 className="block mb-2 text-2xl antialiased font-semibold font-Cuprum leading-snug tracking-normal text-blue-gray-900">
            Scan QR Code
          </h4>
        </div>
      </div>
    </div>
  );
}

export default QrCodeScanner;
