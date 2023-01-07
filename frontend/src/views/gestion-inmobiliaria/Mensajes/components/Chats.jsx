import { useState, useEffect } from 'react';
import chatImg from '../../../../assets/chatImg.jpg';
import axios from 'axios';
import '../css/Chats.css';

const Chats = ({ chat, currentUser, onClick }) => {

  const [friendUser, setFriendUser] = useState(null);

  useEffect(() => {
    const friendId = chat.members.find(id => id !== currentUser._id);

    const getFriendUser = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/admin/get/${friendId}`);
        setFriendUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    getFriendUser();
  }, [chat, currentUser]);

  return (
    <div className="chat" onClick={onClick}>
      <img className="chatImg" src={chatImg} alt="Imágen de Chat" />
      <span className="chatName">{friendUser?.name}</span>
    </div>
  );
}

export default Chats;