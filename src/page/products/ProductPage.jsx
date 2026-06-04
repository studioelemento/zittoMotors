import React from "react";
import ZCRShowcase from "./components/ZCRShowcase";
import FeatureCards from "./components/FeatureCards";
import NotifySection from "./components/NotifySection";
import ProductVideo from "./components/ProductVideo";
import UpcomingSlider from "./components/UpcomingSlider";

const ProductPage = () => {
  return (
    <div>
      <ZCRShowcase />
      <FeatureCards/>
      <NotifySection/>
      <ProductVideo/>
      <UpcomingSlider/>
    </div>
  );
};

export default ProductPage;
