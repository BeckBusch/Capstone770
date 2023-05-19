import "../css/ChatPage.css";
import NavBar from "../components/NavBar";
import ChatNavigationBar from "../components/ChatNavigationBar";
import ChatPanel from "../components/ChatPanel";

import "../css/ChatNavigationBar.css";
import ChatPreviewCard from "../components/ChatPreviewCard";
import ChatBlackIcon from "../assets/chat-black-icon.png";

import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { useNavigate } from "react-router-dom";


function ChatPage() {

  const { chats } = useContext(AppContext);

  const [currentChatID, setCurrentChatID ] = useState(-1);

  const navigate = useNavigate();

  function handleAddChat() {
    setCurrentChatID(-1)
    navigate('/add-chat')
  }

  function handlePreviewClick(id, i) {
    setCurrentChatID(i)
    navigate(`/chat/${id}`);
  }
  

  console.log(currentChatID)
  console.log(chats[currentChatID])
  // console.log(chats[currentChatID]["summary"])

  return (
    <div className="chat-page">
      <NavBar className="sticky-nav" />

      <div className="chat-page-content">
        <div className="chat-nav-div">
          {/* <ChatNavigationBar /> */}
          <div className="chat-navigation-bar">
        <div className="chat-header-div">
          <img src={ChatBlackIcon} className="chat-icon-align" alt="start" />
          <h1 className="chat-header">Chats</h1>
        </div>

        <div className="add-chat-container-div">
          <button className="add-chat-btn" onClick={() => handleAddChat()}>
            + Start New Discussion
          </button>
        </div>

        <div className="chat-search-div">
          <input
            type="text"
            placeholder="Search Chats"
            className="chat-search"
          />
          <button className="chat-search-button"></button>
        </div>

        <div className="scroll">
        {chats.slice(0).reverse().map(function (chat, i) {
          return (
            <button
              className="chat-preview-btn"
              onClick={() => handlePreviewClick(chat["_id"], i)}
              key={i}
            >
              <ChatPreviewCard
                key={i}
                className="dog-card"
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

        <div className="chat-panel-background">
          <ChatPanel id={currentChatID}/>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
