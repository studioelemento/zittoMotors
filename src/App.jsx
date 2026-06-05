import React from "react";
import HomePage from "./page/landing/home/HomePage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ProductPage from "./page/products/ProductPage";
import Navbar from "./page/landing/home/components/Navbar";
import AboutSection from "./page/landing/home/components/AboutSection";
import CareersPage from "./page/careers/CareersPage";
import CareerSubmission from "./page/careers/CareerSubmission";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zcr" element={<ProductPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/career-submission" element={<CareerSubmission />} />
      </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App; 