import React from "react";
import digital from "../assets/Img/digital.png";
import { Link } from "react-router-dom";

const GuestHome = () => {
  return (
    <>
      <div className="home max-w-full h-full">
        <div className="flex-1">
          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="text-white font-bold mt-10 mb-16 text-xl ml-4 ">
                Welcome to Countefeit Product Validation
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="w-1/2 mx-auto ml-56">
                <div className="head1 text-6xl text-blue-500 font-bold mt-4 mb-4">
                  Securely Authenticate Your Products with CPV
                </div>
                <div className="text-lg text-gray-400 mt-5 mb-4 text-center">
                  Our blockchain-based product identification system provides a secure and reliable
                  way to authenticate your products and protect against fraud
                </div>

                <div className="flex justify-center mt-19">
                  <Link to={"/scan"}>
                    <button className="bg-blue-900 p-3 text-white rounded-xl  hover:bg-blue-500">
                      Scan QR
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <img
                  src={digital}
                  alt="heroImg"
                  style={{ maxWidth: "60%", marginBottom: "2rem" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1.25 flex-grow"></div>
      </div>
    </>
  );
};

export default GuestHome;
