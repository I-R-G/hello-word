import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/ProductProvider"
import configureStore from "./hook-store/products-store";
import "./index.css";
import App from "./App";

configureStore()

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById("root")
);
