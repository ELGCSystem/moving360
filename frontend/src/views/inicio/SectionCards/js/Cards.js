import React from 'react';
import Card from './Card.js';
import '../css/Cards.css';

import germano from '../img/germano.png';
import remax from '../img/remax.jpg';
import stella from '../img/stella.jpg';

const cards = [
  {
    id: 1,
    title: 'Germano Imobiliaria',
    image: germano,
    url: 'https://linkfalso.com',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis reprehenderit? Culpa consequatur impedit et quod sint dolor, nobis suscipit tempore aspernatur magni eligendi laboriosam aut, omnis totam maxime repellendus.',
  },
  {
    id: 2,
    title: 'Remax',
    image: remax,
    url: 'https://linkfalso.com',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis reprehenderit? Culpa consequatur impedit et quod sint dolor, nobis suscipit tempore aspernatur magni eligendi laboriosam aut, omnis totam maxime repellendus.',
  },
  {
    id: 3,
    title: 'Stella',
    image: stella,
    url: 'https://linkfalso.com',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis reprehenderit? Culpa consequatur impedit et quod sint dolor, nobis suscipit tempore aspernatur magni eligendi laboriosam aut, omnis totam maxime repellendus.',
  },
];

function Cards() {
  console.log(cards);
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 w-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              url={card.url}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
