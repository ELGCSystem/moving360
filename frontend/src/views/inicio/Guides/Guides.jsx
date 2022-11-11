import React from 'react';
import { Card } from '../../../components';
import './Guides.css';
import { guides } from './GuidesInfo.js';

const Guides = () => (
  <section className="guides">
    <h2 className='guides__title'>Conocé nuestras guías</h2>
      {guides.map((guide) => (
        <Card
          key={guide.id}
          title={guide.title}
          image={guide.image}
          url={guide.url}
          text={guide.text}
          button={guide.button}
          buttonType={guide.buttonType}
          className={guide.class}
        />
      ))}
  </section>
);

export default Guides;
