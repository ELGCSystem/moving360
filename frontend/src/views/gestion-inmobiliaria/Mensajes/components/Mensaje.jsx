import React from 'react';
import chatImg from '../../../../assets/chatImg.jpg';
import '../css/Mensaje.css';
import { format } from 'timeago.js';
export default function Mensaje({ message, own }) {
  return (
    <div className={ own ? "message own" : "message" }>
      <div className="messageTop">
        <img className="messageImg" src={chatImg} alt="Foto de Inmueble" />
        <p className="messageText">
          {message.text}
        </p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
