import React from 'react'
import SEO from '../../../components/SEO'
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
    <div className='dm-sans'>
      <SEO 
        title="Zitto Motors - For The Enthusiast" 
        description="Zitto Motors builds premium electric motorcycles for the enthusiast. Discover a different breed of motorcycle." 
        path="/" 
      />
      <Home />
      <BikeShowcase />
      <FeatureCards />
      <HeroVideo />
      <HarmonySection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default HomePage