import "../css/ChatPage.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import ChatPreviewCard from "../components/ChatPreviewCard";
import DiscussionPanel from "../components/DiscussionPanel";

function ChatPage() {

  const { chats, setCurrentChatID, searchChat } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");
  const [currentChats, setCurrentChats] = useState(chats);
  const [reload, setReload] = useState(true);

  const navigate = useNavigate();

  function handleAddChat() {
    resetPreviewCards();
    setCurrentChatID(-1);
    navigate("/add-chat");
  }
  
  function handlePreviewClick(id, i) {
    resetPreviewCards();
    document.getElementById(`preview${i}`).style.backgroundColor = "#DBDBDB";
    document.getElementById(`preview${i}`).style.border = "1px solid #DBDBDB";
    setCurrentChatID(i);
    navigate(`/chat/${id}`);
  }

  function resetPreviewCards() {
    for (let i = 0; i < chats.length; i++) {
      document.getElementsByClassName("chat-preview-btn")[i].style =
        "chat-preview-btn";
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handlesearchChat();
  };

  async function handlesearchChat() {
    if (searchValue.trim().length != 0) {
      setCurrentChats(await searchChat(searchValue));
    }
  }

  function handleUpdateSearch(value) {
    setReload(false);
    setCurrentChats(chats);
    setSearchValue(value);
  }

  return (
    <div className="chat-page">
      <NavBar className="sticky-nav" />
      <div className="chat-page-content">
        <div className="chat-nav-div">
        <div className="chat-navigation-bar">

<div className="add-chat-div">
  <button className="add-chat-btn" onClick={() => handleAddChat()}>
    + Start New Chat
  </button>
</div>

<form className="form-styling" onSubmit={handleSearchSubmit}>
  <div className="chat-search-div-align">
    <input
      type="search"
      id="mySearch"
      placeholder="Search Chats ..."
      className="chat-search"
      onChange={(e) => handleUpdateSearch(e.target.value)}
    />
    <button type="submit" className="chat-search-button"></button>
  </div>
</form>

<div className="chat-preview-scroll-div">
  <div className="chat-preview-scroll">
    {reload ? chats
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
              date={new Date(chat["createdAt"]).toLocaleDateString('en-GB')}
            />
          </button>
        );
      }) : currentChats
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
              date={new Date(chat["createdAt"]).toLocaleDateString('en-GB')}
                      
            />
          </button>
        );
      })}
  </div>
</div>
</div>
  </div>
        <div className="chat-panel-background">
          <DiscussionPanel />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
