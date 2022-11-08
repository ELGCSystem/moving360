import React, { useEffect } from 'react';
import Filtros from './Filtros.jsx';
import './Publicaciones.css';
import SearchItem from './SearchItem.js'

const Publicaciones = () => {
  useEffect(() => {
    document.title = 'Publicaciones - Moving360';
  }, []);

  return (


    <div className="list">
      <div className="list__container">
        <div className="container__wrapper">
          <div className="wrapper__search">
            <h1 className="search__title">Búsqueda</h1>
            <label className="item__title">Ubicación</label>
            <div className="search__item">
              <div className="item">
                <input className='input__box' type='range' />
                <input className='input__box' type='radio' />
                <p className="item__subtitle">Argentina</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">Uruguay</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">Paraguay</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">Estados Unidos</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">Brasil</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">Bolivia</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">Chile</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">España</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">Italia</p>
              </div>
              <div className="item">
                <input className='input__box' type={'radio'} />
                <p className="item__subtitle">Otros Países</p>
              </div>
            </div>
            <label className="item__title">Tipo de Operación</label>
            <div className="search__item">
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Venta</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Alquiler</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Alquiler por Temporada</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Tiempo Compartido</p>
              </div>
              <button className='item__button'>Aplicar</button>
            </div>
            <label className="item__title">Tipo de Propiedad</label>
            <div className="search__item">
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Departamento</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Casa</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">PH</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Terreno</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Local</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Campo</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Cochera</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Fondo Comercio</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Galpón</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Hotel</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Negocio Especial</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Oficina</p>
              </div>
              <div className="item">
                <input className='input__box' type={'checkbox'} />
                <p className="item__subtitle">Quinta</p>
              </div>
              <button className='item__button'>Aplicar</button>
            </div>
          </div>
          <div className="wrapper__result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publicaciones;
