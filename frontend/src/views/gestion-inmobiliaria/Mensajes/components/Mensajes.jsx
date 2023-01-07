import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Chats from './Chats.jsx';
import Mensaje from './Mensaje.jsx';
import ChatOnline from './ChatOnline.jsx';
import axios from 'axios';
import { io } from 'socket.io-client';
import '../css/Mensajes.css';

const Mensajes = () => {

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const userInfo = useSelector(store => store.user.userInfo);
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:5000");
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage && 
    currentChat?.members.includes(arrivalMessage.sender) && 
    setMessages(prev => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userInfo._id);
    socket.current.on("getUsers", users => console.log(users));
  }, [userInfo]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/chat/get/${userInfo._id}`);
        setChats(data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getChats();
  }, [userInfo._id]); 

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/message/get/${currentChat?._id}`);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages]);

  const handleSubmit = async e => {
    e.preventDefault();

    const receiverId = currentChat.members.find(member => member !== userInfo._id);

    console.log(receiverId);

    socket.current.emit("sendMessage", {
      senderId: userInfo._id,
      receiverId,
      text: newMessage,
    });

    try {
      const { data } = await axios.post("http://localhost:4000/api/message/new", {
        sender: userInfo._id,
        text: newMessage,
        chatId: currentChat._id
      });
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              placeholder="Busca a tus clientes"
              className="chatMenuInput"
            />
            {
              chats.map(chat => (
                <Chats
                  key={chat._id}
                  chat={chat}
                  currentUser={userInfo}
                  onClick={() => setCurrentChat(chat)} />
              ))
            }
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {
              currentChat ? (
                <>
                  <div className="chatBoxTop">
                    {
                      messages.map(message => (
                        <div ref={scrollRef}>
                          <Mensaje 
                          key={message._id} 
                          message={message} 
                          own={message.sender === userInfo._id} />
                        </div>
                      )) 
                    }
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      className="chatMessageInput"
                      placeholder="Escribe algo..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></textarea>
                    <button className="chatSubmitButton" onClick={handleSubmit}>Enviar</button>
                  </div>
                </>
              ) : (
                <span>Abrí una conversación</span>
              )
            }
            
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
