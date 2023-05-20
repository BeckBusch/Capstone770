import "../css/ChatNavigationBar.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import ChatPreviewCard from "../components/ChatPreviewCard";
import ChatBlack from "../assets/icon-chat-black.png";

function ChatNavigationBar() {
  const { chats, setCurrentChatID } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  function handleAddChat() {
    resetPreviewCards();
    setCurrentChatID(-1);
    navigate("/add-chat");
  }

  function handlePreviewClick(id, i) {
    resetPreviewCards();
    document.getElementById(`preview${i}`).style.backgroundColor = "#DBDBDB";
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
    handleSearchDog();
  };

  async function handleSearchDog() {
    if (searchValue.trim().length != 0) {
      // setCurrentDogs(await searchDog(searchValue));
    }
  }

  function handleUpdateSearch() {
    // setCurrentDogs(dogs);
    // setSearchValue(value);
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

      <form className="form-styling" onSubmit={handleSearchSubmit}>
        <div className="chat-search-div-align">
          <input
            type="search"
            id="mySearch"
            placeholder="Search by name or breed ..."
            className="chat-search"
            onChange={(e) => handleUpdateSearch(e.target.value)}
          />
          <button type="submit" className="chat-search-button"></button>
        </div>
      </form>

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
                    date={chat["createdAt"].slice(0, 10)}
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
