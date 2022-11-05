import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Guide({imageSource, option, url, button, text, nameclass_img, nameclass_text}) {
  return (
    <div className='guides-card'>
        <div className={nameclass_img}>
            <img src={imageSource} alt='' className='guides-card__img'></img>
        </div>
        <div className={nameclass_text}>
            <h3 className='guides-card__title'>¿Qué necesito para {option}?</h3>
            <p className='guides-card__text'>{ text ? text : 'Accedé a los detalles ingresando a nuestra guía.' }</p>
            <Button href={url} className='guides-card__button button button--white'>
                {button}
            </Button>
        </div>
    </div>      
  )
}

Guide.propTypes = {
  imageSource: PropTypes.string,
  option: PropTypes.string.isRequired,
  url: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  nameclass_img: PropTypes.string.isRequired,
  nameclass_text: PropTypes.string.isRequired
}

export default Guide
