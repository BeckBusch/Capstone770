import "../css/ChatNavigationBar.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import ChatPreviewCard from "../components/ChatPreviewCard";
import ChatBlack from "../assets/icon-chat-black.png";

function ChatNavigationBar() {
  const { chats, setCurrentChatID } = useContext(AppContext);

  const navigate = useNavigate();

  function handleAddChat() {
    resetPreviewCards();
    setCurrentChatID(-1);
    navigate("/add-chat");
  }

  function handlePreviewClick(id, i) {
    resetPreviewCards();
    document.getElementById(`preview${i}`).style.backgroundColor = "#BDD3E8";
    setCurrentChatID(i);
    navigate(`/chat/${id}`);
  }

  function resetPreviewCards() {
    for (let i = 0; i < chats.length; i++) {
      document.getElementsByClassName("chat-preview-btn")[i].style =
        "chat-preview-btn";
    }
  }

  return (
    <div className="chat-navigation-bar">
      <div className="chat-header-div">
        <img src={ChatBlack} className="chat-icon-align" alt="start" />
        <h1 className="chat-header">Chats</h1>
      </div>

      <div className="add-chat-div">
        <button className="add-chat-btn" onClick={() => handleAddChat()}>
          + Start New Discussion
        </button>
      </div>

      <div className="chat-search-div">
        <input type="text" placeholder="Search Chats" className="chat-search" />
        <button className="chat-search-button"></button>
      </div>

      <div className="chat-preview-scroll-div">
        <div className="chat-preview-scroll">
          {chats
            .slice(0)
            .reverse()
            .map(function (chat, i) {
              return (
                <button
                  className="chat-preview-btn"
                  onClick={() => handlePreviewClick(chat["_id"], i)}
                  id={`preview${i}`}
                  key={i}
                >
                  <ChatPreviewCard
                    key={i}
                    className="chat-preview-btn"
                    summary={chat["summary"]}
                    discussion={chat["discussion"]}
                    user={chat["user"]}
                  />
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ChatNavigationBar;
