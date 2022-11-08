import React from 'react';
import { Button } from '../../components';

const Card = ({ title, image, text, url, button, buttonType, className }) => (
  <div className={`${className}-card`}>
    <img className={`${className}-card__img`} src={image} alt='' />
    <div className={`${className}-card__body`}>
      <h3 className={`${className}-card__title`}>{title}</h3>
      <p className={`${className}-card__text`}>{text}</p>
      <Button to={url} type={buttonType}>
        {button}
      </Button>
    </div>      
  </div>
);

export default Card;
