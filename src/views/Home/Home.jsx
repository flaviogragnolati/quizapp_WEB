import React from 'react';
import ProductSmokingHero from './components/Goodbye';
import Inicio from './components/Inicio';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Pricing from 'views/Home/components/Pricing';

function Home() {
  return (
    <>
      <Inicio />
      <About />
      <HowItWorks />
      <Pricing />
      <Contact />
      <ProductSmokingHero />
    </>
  );
}

export default Home;
