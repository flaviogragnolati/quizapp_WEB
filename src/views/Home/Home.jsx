import React from 'react';
import ProductSmokingHero from './components/Goodbye';
import ProductHero from './components/Inicio';
import ProductValues from './components/About';
import ProductHowItWorks from './components/HowItWorks';
import ProductCTA from './components/Contact';

function Home() {
  return (
    <>
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </>
  );
}

export default Home;
