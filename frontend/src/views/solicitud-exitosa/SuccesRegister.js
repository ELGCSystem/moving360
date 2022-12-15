import React from 'react';
import './SuccessRegister.css';
import vectorRegister from '../../assets/vectorRegister.jpg';

const succesRegister = () => {
  return (
    <div className="container__success">
      <img src={vectorRegister} alt="Success" className="success__img vector" />
      <h1 className="success__title">¡Solicitud Enviada Exitosamente!</h1>
      <p className="success__text">
        Muchas gracias por enviar tu solicitud, la misma está siendo procesada.
        Pronto uno de nuestros agentes se comunicará con vos.
      </p>
      <p className="success__signature">Moving360</p>
    </div>
  );
};

export default succesRegister;
