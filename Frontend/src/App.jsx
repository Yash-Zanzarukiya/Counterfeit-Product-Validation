import "./App.css";
import React, { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./app/authSlice";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen w-full flex flex-wrap content-between bg-gray-800 bg-gradient-to-br from-gray-600 to-pink-900">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <div className=" size-full flex align-middle justify-center">Loading...</div>
  );
}

export default App;
