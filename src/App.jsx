import React, { useState } from "react";
import HomePage from "./page/landing/home/HomePage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ProductPage from "./page/products/ProductPage";
import Navbar from "./page/landing/home/components/Navbar";
import AboutSection from "./page/landing/home/components/AboutSection";
import CareersPage from "./page/careers/CareersPage";
import CareerSubmission from "./page/careers/CareerSubmission";
import InterestModal from "./page/landing/home/components/InterestModal";
import { InterestProvider } from "./context/InterestContext";

const App = () => {
  return (
    <HelmetProvider>
      <InterestProvider>
        <BrowserRouter>
          <Navbar />
          <div className="pt-[85px] md:pt-[100px]">
            {/* page content */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/zcr" element={<ProductPage />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/career-submission" element={<CareerSubmission />} />
            </Routes>
          </div>
        </BrowserRouter>
      </InterestProvider>
    </HelmetProvider>
  );
};

export default App;
