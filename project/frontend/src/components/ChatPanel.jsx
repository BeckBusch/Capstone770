import "../css/ChatPanel.css";
import MyAccountBlackIcon from "../assets/my-account-icon-black.png";

function ChatPanel(props) {
  return (
    <div className="chat-panel">
      <div className="chat-panel-details">
        <h1 className="chat-panel-title">{props.title}</h1>
        <p className="chat-panel-user">Posted by {props.user}</p>
        <p className="chat-panel-message">{props.message}</p>
      </div>
    </div>
  );
}

export default ChatPanel;
