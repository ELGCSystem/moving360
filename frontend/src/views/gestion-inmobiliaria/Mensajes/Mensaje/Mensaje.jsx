import React from 'react';
import chatImg from '../../../../assets/chatImg.jpg';
import './Mensaje.css';

export default function Mensaje({ own }) {
  return (
    <div className={ own ? "message own" : "message" }>
      <div className="messageTop">
        <img className="messageImg" src={chatImg} alt="Foto de Inmueble" />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="messageBottom">Hace 1 hora</div>
    </div>
  );
}
