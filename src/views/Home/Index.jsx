import React from 'react';
import ProductSmokingHero from './components/ProductSmokingHero';
import ProductHero from './components/ProductHero';
import ProductValues from './components/ProductValues';
import ProductHowItWorks from './components/ProductHowItWorks';
import ProductCTA from './components/ProductCTA';


function Home() {
  return (
    <>
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </React.Fragment>
    </>
  );
}

export default Home;