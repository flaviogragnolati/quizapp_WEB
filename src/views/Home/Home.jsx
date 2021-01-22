import React from 'react';
import ProductSmokingHero from './components/ProductSmokingHero';
import ProductHero from './components/ProductHero';
import ProductValues from './components/ProductValues';
import ProductHowItWorks from './components/ProductHowItWorks';
import ProductCTA from './components/ProductCTA';

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
