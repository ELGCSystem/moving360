import React from 'react';
import vectorVerification from '../../assets/vectorVerification.jpg';
import { Button } from '../../components/index.js';
import './Verificacion.css';

const Verificacion = () => {
  return (
    <div className='verification-body'>
      <div className="top-container">
        <img className='top-img' src={vectorVerification} alt="Verificación" />
        <h1 className='top-title'>Bienvenido a la familia Moving360</h1>
      </div>
      <div className="bottom-container">
        <h3 className='bottom-title'>Tu cuenta ha sido verificada con éxito!</h3>
        <p className='bottom-text'>
          Con tu cuenta ya verificada podes navegar a lo largo de todo Moving360
          teniendo acceso a cada uno de los beneficios que ofrecemos, tales
          como:
          <b>
            CREAR BÚSQUEDAS ESPECIALIZADAS, COMUNICARTE CON UNA INMOBILIARIA
            PARA PODER OBTENER INFORMACIÓN EXTRA DE UNA PUBLICACIÓN QUE TE HAYA
            GUSTADO, ENTRE MUCHOS MÁS
          </b>
        </p>

        <Button to="/" className="verificacion" type="blue">
          Ir al Inicio
        </Button>
      </div>
    </div>
  );
};

export default Verificacion;
