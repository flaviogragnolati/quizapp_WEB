import React from 'react';
import ProductSmokingHero from './components/Goodbye';
import Inicio from './components/Inicio';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';

function Home() {
  return (
    <>
      <Inicio />
      <About />
      <HowItWorks />
      <Contact />
      <ProductSmokingHero />
    </>
  );
}

export default Home;
