import "../css/ChatPage.css";
import NavBar from "../components/NavBar";
import ChatNavigationBar from "../components/ChatNavigationBar";
import AddChatPanel from "../components/AddChatPanel";

function ChatPage() {
  return (
    <div className="chat-page">
      <NavBar className="sticky-nav" />

      <div className="chat-page-content">
        <div className="chat-nav-div">
          <ChatNavigationBar />
        </div>

        <div className="chat-panel-background">
          {/* <ChatPanel /> */}
          <AddChatPanel />
        </div>
        
      </div>
    </div>
  );
}

export default ChatPage;
