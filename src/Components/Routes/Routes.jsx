import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../../App";
import Error from "../Errore/Error";
import Home from "../Home/Home";
import Product from "../Product/Product";
import SingleProduct from "../SingleProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/home",
        Component: Home,
      },
      {
        path: "/product",
        Component: Product,
      },
      {
        path: "/product/:id",
        Component: SingleProduct,
      },
    ],
  },
]);

export default Routes;
