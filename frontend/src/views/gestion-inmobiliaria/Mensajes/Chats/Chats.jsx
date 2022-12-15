import "./Chats.css";
import chatImg from '../../../../assets/chatImg.jpg'

export default function Chats() {
    return (
        <div className="chat">
            <img className="chatImg" src={chatImg} alt="Imágen de Chat" />
            <span className="chatName">Ezequiel</span>
        </div>
    )
}