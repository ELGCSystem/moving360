import React, { useEffect } from 'react';
import Header from './Header/js/Header.js';
import SectionFirst from './SectionFirst/js/SectionFirst.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './SectionCards/js/Cards.js';
import Guides from './Guides/js/Guides.js';

const Inicio = () => {
  useEffect(() => {
    document.title = 'Moving360';
  }, []);

  return (
    <div>
      <Header />
      <SectionFirst />
      <div className="App">
        <h1 className="App-title">Inmobiliarias Destacadas</h1>
        <Cards classname="Cards-body" />
      </div>
      <Guides />
    </div>
  );
};

export default Inicio;
