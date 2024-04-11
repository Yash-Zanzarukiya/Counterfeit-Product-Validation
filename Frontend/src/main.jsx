import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./components/index.js";

import Home from "./pages/Home.jsx";
import AddProduct from "./pages/AddProduct";
import Signup from "./pages/Signup";
import QrCode from "./pages/QrCode.jsx";
import AllProducts from "./pages/AllProduct";
import Login from "./pages/Login.jsx";
import ProductInfo from "./pages/ProductInfo.jsx";
import QrCodeScanner from "./pages/QrCodeScanner.jsx";
import { FakeProduct } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllProducts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddProduct />
          </AuthLayout>
        ),
      },
      {
        path: "/qrcode/:slug",
        element: (
          <AuthLayout authentication>
            <QrCode />
          </AuthLayout>
        ),
      },
      {
        path: "/scan",
        element: (
          <AuthLayout authentication={false}>
            <QrCodeScanner />
          </AuthLayout>
        ),
      },
      {
        path: "/product/:slug",
        element: <ProductInfo />,
      },
      {
        path: "/fake-product",
        element: <FakeProduct />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
