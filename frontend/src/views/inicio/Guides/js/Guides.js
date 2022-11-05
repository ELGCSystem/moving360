import React from 'react';
import Guide from './Guide.js';
import '../css/Guide.css';

import alquilar from '../img/alquilar.jpg';
import comprar from '../img/comprar.jpg';
import vender from '../img/vender.jpg';

const guides = [
  {
    id: 1,
    image: alquilar,
    option: 'alquilar',
    url: 'https://linkfalso.com',
    button: 'Guía de Alquiler',
    text: 'Accedé a los detalles ingresando a nuestra guía.',
    class_img: 'guides-card__img-container',
    class_text: 'guides-card__text-container',
  },
  {
    id: 2,
    image: comprar,
    option: 'comprar',
    url: 'https://linkfalso.com',
    button: 'Guía de Compra',
    text: 'Accedé a los detalles ingresando a nuestra guía.',
    class_img: 'guides-card__img-container--second',
    class_text: 'guides-card__text-container--second',
  },
  {
    id: 3,
    image: vender,
    option: 'vender',
    url: 'https://linkfalso.com',
    button: 'Guía de Venta',
    text: 'Accedé a los detalles ingresando a nuestra guía.',
    class_img: 'guides-card__img-container',
    class_text: 'guides-card__text-container',
  },
];

function Guides() {
  console.log(guides);
  return (
    <div className="guides">
      {guides.map((guides) => (
        <Guide
          key={guides.id}
          nameclass_img={guides.class_img}
          nameclass_text={guides.class_text}
          imageSource={guides.image}
          option={guides.option}
          url={guides.url}
          button={guides.button}
          text={guides.text}
        />
      ))}
    </div>
  );
}

export default Guides;
