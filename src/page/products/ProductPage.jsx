import React from "react";
import SEO from "../../components/SEO";
import ZCRShowcase from "./components/ZCRShowcase";
import FeatureCards from "./components/FeatureCards";
import NotifySection from "./components/NotifySection";
import ProductVideo from "./components/ProductVideo";
import UpcomingSlider from "./components/UpcomingSlider";
import Footer from "../landing/home/components/Footer";


const ProductPage = () => {
  return (
    <div>
      <SEO 
        title="Zitto ZCR - The Ultimate Ride" 
        description="Explore the Zitto ZCR, designed for ultimate performance and aesthetics. Experience the future of electric mobility." 
        path="/zcr" 
      />
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
