import React, { useEffect } from 'react';
import Hero from './Hero/Hero.jsx';
import LogBenefits from './LogBenefits/LogBenefits.jsx';
import RealEstate from './RealEstate/RealEstate.jsx';
import Guides from './Guides/Guides.jsx';

const Inicio = () => {

  useEffect(() => {
    document.title = "Inicio - Moving360"
  }, []);

  return (
    <div>
      <Hero />
      <LogBenefits />
      <RealEstate />
      <Guides />
    </div>
  )
}

export default Inicio;