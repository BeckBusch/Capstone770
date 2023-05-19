import "../css/ChatPreviewCard.css";

function ChatPreviewCard(props) {

// TODO: Clip title and message preview if too long

  return (
    <div className="chat-preview-card">
      <div className="chat-preview-details">
        <h1 className="chat-title">{props.title}</h1>
        <p className="chat-message">{props.message}</p>
      </div>
    </div>
  );
}

export default ChatPreviewCard;
