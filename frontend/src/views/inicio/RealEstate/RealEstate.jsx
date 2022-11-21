import React from 'react';
import { Card } from '../../../components';
import './RealEstate.css';
import { cards } from './RealEstateInfo.js';

const RealEstate = () => (
  <section className='real-estate'>
    <h2 className='real-estate__title'>Inmobiliarias destacadas</h2>
    <div className="real-estate__cards">
        {
          cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              image={card.image}
              url={card.url}
              text={card.text}
              button={card.button}
              buttonType={card.buttonType}
              className={card.class}
            />
          ))
        }
    </div>
  </section>
);

export default RealEstate;
