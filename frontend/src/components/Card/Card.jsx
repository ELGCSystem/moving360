import React from 'react';
import { Button } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => (
  <div className={`${props.className}-card`}>
    {props.image ? <img className={`${props.className}-card__img`} src={props.image} alt='' /> : null}
    {props.icon ? <FontAwesomeIcon className={`${props.className}-card__icon`} icon={props.icon} /> : null}
    
    <div className={`${props.className}-card__body`}>
      <h3 className={`${props.className}-card__title`}>{props.title}</h3>
      {props.subtitle ? <h4 className={`${props.className}-card__subtitle`}>{props.subtitle}</h4> : null}
      {props.text ? <p className={`${props.className}-card__text`}>{props.text}</p> : null}
      {props.text2 ? <p className={`${props.className}-card__text`}>{props.text2}</p> : null}
      {props.list ? <ul className={`${props.className}-card__list`}>{props.list}</ul> : null}
      <Button to={props.url ? props.url : "/"} type={props.buttonType}>
        {props.button}
      </Button>
    </div>

  </div>
);

export default Card;
