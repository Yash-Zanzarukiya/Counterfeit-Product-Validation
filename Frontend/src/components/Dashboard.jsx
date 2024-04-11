import { useEffect, useState } from "react";
import backendService from "../backend/auth";
import { useLocation } from "react-router-dom";
import { ethers } from "ethers";

export default function Dashboard() {
  let location = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      await backendService
        .getCurrentUser()
        .then((blob) => blob.json())
        .then((res) => {
          let userData = res.data;
          setUser(userData);
        });
    };
    getUser();
  }, [location.pathname]);

  return (
    <div className="w-full py-8 ">
      <div className=" min-h-full flex flex-wrap items-center justify-center">
        <div className="w-full flex align-middle justify-center">
          <div className=" text-center text-3xl w-1/2 flex align-middle justify-center flex-col gap-5">
            <div className=" mt-36 flex align-middle justify-center flex-col gap-3">
              <span className="flex align-middle justify-center">
                <img className=" font-bold h-36 rounded" src={user && user.logo} />
              </span>
              <span>
                Owner Name:
                <span className=" font-bold"> {user && user?.fullName}</span>
              </span>
              <span>
                username:
                <span className=" font-bold"> {user && user?.username}</span>
              </span>
              <span>
                brandName:
                <span className=" font-bold"> {user && user?.brandName}</span>
              </span>
              <span>
                email: <span className=" font-bold">{user && user?.email}</span>
              </span>
              <span>
                licenceNumber:
                <span className=" font-bold ml-1">{user && user?.licenceNumber}</span>
              </span>
              <span>
                address:
                <span className=" font-bold ml-1">{user && user?.address}</span>
              </span>
              <span>
                location:
                <span className=" font-bold ml-1">{user && user?.location}</span>
              </span>
              <span>
                description:
                <span className=" font-bold ml-1">{user && user?.description}</span>
              </span>
              <span>
                website:
                <span className=" font-bold ml-1">{user && user?.website}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
