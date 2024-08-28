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
  Completed,
  Home,
  Product,
  Login,
  NewArrival,
  NotFound,
  Detail,
  MyProducts,
} from "./Pages/index.js";
import { AuthLayout } from "./components/index.js";
import CreatePost from "./Pages/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <AuthLayout authentication={false}>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "details/:item",
        element: (
          <AuthLayout authentication={true}>
            <Detail />
          </AuthLayout>
        ),
      },
      {
        path: "myproducts",
        element: (
          <AuthLayout authentication={true}>
            <MyProducts />
          </AuthLayout>
        ),
      },
      {
        path: "new-arrival",
        element: (
          <AuthLayout authentication={true}>
            <NewArrival />
          </AuthLayout>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: (
          <AuthLayout authentication={true}>
            <Cart />
          </AuthLayout>
        ),
      },
      {
        path: "create-post",
        element: (
          <AuthLayout authentication={true}>
            <CreatePost />
          </AuthLayout>
        ),
      },
      {
        path: "checkout",
        element: (
          <AuthLayout authentication={true}>
            <Checkout />
          </AuthLayout>
        ),
      },
      {
        path: "completed",
        element: (
          <AuthLayout authentication={true}>
            <Completed />
          </AuthLayout>
        ),
      },

      {
        path: "/products/*",
        element: (
          <AuthLayout authentication={true}>
            <Product />
          </AuthLayout>
        ),
        children: [
          {
            index: true,
            element: <Cat />,
          },
          {
            path: "products/categories",
            element: <Cat />,
          },
          {
            path: "categories/:category",
            element: <Cat />,
          },
          {
            path: "products/collections",
            element: <Cat />,
          },
          {
            path: "collections/:collection",
            element: <Cat />,
          },
        ],
      },
      // Fallback route
      {
        path: "*",
        element: <NotFound />,
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
