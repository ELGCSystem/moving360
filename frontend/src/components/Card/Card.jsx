import React from 'react';
import { Button } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, image, icon, text, url, button, buttonType, className }) => (
  <div className={`${className}-card`}>
    <img className={`${className}-card__img`} src={image} alt='' />
    <FontAwesomeIcon className={`${className}-card__icon`} icon={icon} />
    <div className={`${className}-card__body`}>
      <h3 className={`${className}-card__title`}>{title}</h3>
      <p className={`${className}-card__text`}>{text}</p>
      <Button to={url ? url : "/"} type={buttonType}>
        {button}
      </Button>
    </div>      
  </div>
);

export default Card;
