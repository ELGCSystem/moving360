import '../css/ChatOnline.css';
import chatImg from '../../../../assets/chatImg.jpg'

export default function ChatOnline() {
    return (
        <div className='chatOnline'>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className='chatOnlineImg' src={chatImg} alt="Foto de Chat" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Ezequiel</span>
            </div>
        </div>
    )
}