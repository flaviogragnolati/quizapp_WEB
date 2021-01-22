import React from 'react';
import ProductSmokingHero from './components/Goodbye';
import ProductHero from './components/Inicio';
import ProductValues from './components/About';
import ProductHowItWorks from './components/HowItWorks';
import ProductCTA from './components/Contact';


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