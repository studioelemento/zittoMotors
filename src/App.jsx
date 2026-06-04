import React from "react";
import HomePage from "./page/landing/home/HomePage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ProductPage from "./page/products/ProductPage";

const App = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
