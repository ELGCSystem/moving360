import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Card({title, imageSource, text, url}) {
  return (
    <div className='card text-center bg-white'>
          <div className='overflow'>
            <img className='image-card' src={imageSource} alt='' />
          </div>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
              {
                text ? text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo omnis fuga recusandae incidunt cupiditate eos quae aut natus corrupti, quos quis mollitia dolore consectetur magnam dolor nobis soluta impedit facere.'
              }
            </p>
            <Button href={url} variant="primary" size="lg" active>
              Ver más
            </Button>{' '}
        </div>      
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card
