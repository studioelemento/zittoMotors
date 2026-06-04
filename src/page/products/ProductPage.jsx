import React from "react";
import ZCRShowcase from "./components/ZCRShowcase";
import FeatureCards from "./components/FeatureCards";
import NotifySection from "./components/NotifySection";
import ProductVideo from "./components/ProductVideo";
import UpcomingSlider from "./components/UpcomingSlider";
import Footer from "../landing/home/components/Footer";


const ProductPage = () => {
  return (
    <div>
      <ZCRShowcase />
      <FeatureCards/>
      <NotifySection/>
      <ProductVideo/>
      <UpcomingSlider/>
      <Footer/>
    </div>
  );
};

export default ProductPage;
