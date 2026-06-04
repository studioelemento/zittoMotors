import React from "react";
import HomePage from "./page/landing/home/HomePage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ProductPage from "./page/products/ProductPage";
import Navbar from "./page/landing/home/components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className="pt-20">
      {" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;