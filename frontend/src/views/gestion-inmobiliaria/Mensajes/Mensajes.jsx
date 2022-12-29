import React from 'react';
import './Mensajes.css';
import Chats from './Chats/Chats.jsx';
import Mensaje from './Mensaje/Mensaje.jsx';
import ChatOnline from './ChatOnline/ChatOnline.jsx';

const Mensajes = () => {
  return (
    <section>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              placeholder="Busca a tus clientes"
              className="chatMenuInput"
            />
            <Chats />
            <Chats />
            <Chats />
            <Chats />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje own={true} />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje own={true} />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje own={true} />
              <Mensaje own={true} />
              <Mensaje own={true} />
              <Mensaje />
              <Mensaje />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Escribe algo..."
              ></textarea>
              <button className="chatSubmitButton">Enviar</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mensajes;
