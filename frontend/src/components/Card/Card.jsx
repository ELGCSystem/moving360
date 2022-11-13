import React from 'react';
import { Button } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, image, icon, text, text2, url, button, buttonType, className }) => (
  <div className={`${className}-card`}>
    <img className={`${className}-card__img`} src={image} alt='' />
    {icon ? <FontAwesomeIcon className={`${className}-card__icon`} icon={icon} /> : null}
    <div className={`${className}-card__body`}>
      <h3 className={`${className}-card__title`}>{title}</h3>
      <p className={`${className}-card__text`}>{text}</p>
      {text2 ? <p className={`${className}-card__text`}>{text2}</p> : null}
      <Button to={url ? url : "/"} type={buttonType}>
        {button}
      </Button>
    </div>      
  </div>
);

export default Card;
