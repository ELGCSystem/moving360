import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faBed,
  faBarChart,
  faTrash,
  faHeart,
  faMobileAlt,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import './SearchItem.css';

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://www.hola.com/imagenes/decoracion/20200221160490/decoracion-interiores-casa-familiar-confort-sencillez/0-782-609/casa-familiar-4m-m.jpg"
        alt=""
        className="searchItem__img"
      />
      <div className="searchItem__description">
        <h1 className="searchItem__title">USD 15.000</h1>
        <span className="searchItem__location">Ubicada en Lanus</span>
        <span className="searchItem__description-jr">
          Departamento en Venta en Gerli, Lanus
        </span>
        <span className="searchItem__subtitle">
          Departamento con Aire Acondicionado
        </span>
        <span className="searchItem__features">
          <FontAwesomeIcon
            icon={faBarChart}
            style={{ fontSize: '2rem', transform: 'rotate(270deg)' }}
          />
          <p className="icon__text">
            95m<sup>2</sup> cubiertos
          </p>
          <FontAwesomeIcon icon={faBed} style={{ fontSize: '2rem' }} />
          <p className="icon__text">3 dorm.</p>
          <FontAwesomeIcon icon={faCalendar} style={{ fontSize: '2rem' }} />
          <p className="icon__text">30 años</p>
        </span>
        <span className="searchItem__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          saepe dolorum consequuntur alias mollitia deleniti debitis doloribus
          nisi dignissimos fugiat at id sequi quisquam, nam, perspiciatis
          numquam dicta officiis nulla?
        </span>
        <div className="button__group">
          <div className="searchItem__button">
            <button>
              <FontAwesomeIcon
                className="features__icon trash"
                icon={faTrash}
                style={{ fontSize: '1.5rem' }}
              />
            </button>
          </div>
          <div className="searchItem__button">
            <button>
              <FontAwesomeIcon
                className="features__icon heart"
                icon={faHeart}
                style={{ fontSize: '1.5rem' }}
              />
            </button>
          </div>
          <div className="searchItem__button">
            <button>
              <FontAwesomeIcon
                className="features__icon mobile"
                icon={faMobileAlt}
                style={{ fontSize: '1.5rem' }}
              />
            </button>
          </div>
          <div className="searchItem__button">
            <button>
              <FontAwesomeIcon
                className="features__icon message"
                icon={faMessage}
                style={{ fontSize: '1.5rem' }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
