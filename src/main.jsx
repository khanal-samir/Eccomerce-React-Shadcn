import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  Cart,
  Cat,
  Checkout,
  Coll,
  Completed,
  Home,
  Product,
  Distributor,
  Login,
  NewArrival,
} from "./Pages/index.js";
import { AuthLayout } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication={false}>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/new-arrival",
        element: (
          <AuthLayout authentication={false}>
            <NewArrival />
          </AuthLayout>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: (
          <AuthLayout authentication={true}>
            <Cart />
          </AuthLayout>
        ),
      },
      {
        path: "/checkout",
        element: (
          <AuthLayout authentication={true}>
            <Checkout />
          </AuthLayout>
        ),
      },
      {
        path: "/completed",
        element: (
          <AuthLayout authentication={true}>
            <Completed />
          </AuthLayout>
        ),
      },
      {
        path: "/products",
        element: (
          <AuthLayout authentication={false}>
            <Product />
          </AuthLayout>
        ),
        children: [
          {
            path: "categories",
            element: <Cat />,
          },
          {
            path: "collections",
            element: <Coll />,
          },
          {
            path: "categories/:category",
            element: <Cat />,
          },
          {
            path: "collections/:collection",
            element: <Coll />,
          },
          {
            path: "distributor",
            element: <Distributor />,
          },
          {
            path: "distributor/:seller",
            element: <Distributor />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
