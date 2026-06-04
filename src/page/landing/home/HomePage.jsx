import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import BikeShowcase from './components/BikeShowCase'
import FeatureCards from './components/FeatureCards'
import HeroVideo from './components/HeroVideo'
import HarmonySection from './components/HarmonySection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

const HomePage = () => {
  return (
    <>
      <Home />
      <BikeShowcase />
      <FeatureCards />
      <HeroVideo />
      <HarmonySection />
      <AboutSection />
      <Footer />
    </>
  )
}

export default HomePage