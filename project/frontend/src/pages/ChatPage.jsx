import "../css/ChatPage.css";
import NavBar from "../components/NavBar";
import ChatPreviewCard from "../components/ChatPreviewCard";
import ChatBlackIcon from "../assets/chat-black-icon.png";
import ChatPanel from "../components/ChatPanel";

function ChatPage() {
  return (
    <div className="chat-page">
      <NavBar className="chat-page-nav-bar" />

      <div className="chat-page-content">
        <div className="chat-navigator">
          <div className="chat-header-div">
            <img src={ChatBlackIcon} className="chat-icon-align" alt="start" />
            <h1 className="chat-header">Chats</h1>
          </div>

          <div className="chat-search-div">
            <input
              type="text"
              placeholder="Search Chats"
              className="chat-search"
            />
            <button className="chat-search-button"></button>
          </div>

          {/* Hardcoded */}
          <ChatPreviewCard title="Chat Preview" message="Message Preview" />
          <ChatPreviewCard title="Chat Preview" message="Message Preview" />
          <ChatPreviewCard title="Chat Preview" message="Message Preview" />
          <ChatPreviewCard title="Chat Preview" message="Message Preview" />
        </div>

        <div className="chat-panel-background">
        <ChatPanel title="Chat Panel" user="Username" message="this is where the message content goes."/>
        <ChatPanel title="Chat Panel" user="Username" message="this is where the message content goes. this is just to see how a long message would appear on the panel.
        abcdefg hijklmnop qrs tuv wx yz abcdefg hijk lmfddfbnijd eariughruitgnfri fresiutbun aerjrjr rjhrhr airbgierbgierbe rhrh rrr wirghjabgibra"/>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
