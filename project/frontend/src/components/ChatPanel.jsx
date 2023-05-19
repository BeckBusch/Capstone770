import "../css/ChatPanel.css";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

import AddChatPanel from "./AddChatPanel";

function ChatPanel() {
  const { chats, currentChatID} = useContext(AppContext);
  console.log("CHATPANEL " + currentChatID)

  return currentChatID >= 0 ? (
    <div className="chat-panel">
      <div className="chat-panel-details">
        <h1 className="chat-panel-title">
          {chats.slice(0).reverse()[currentChatID]["summary"]}
        </h1>
        <p className="chat-panel-user">
          Posted by {chats.slice(0).reverse()[currentChatID]["user"]}
        </p>
        <p className="chat-panel-date">
          {chats.slice(0).reverse()[currentChatID]["createdAt"]}
        </p>
        <p className="chat-panel-message">
          {chats.slice(0).reverse()[currentChatID]["discussion"]}
        </p>
      </div>
    </div>
  ) : (
    <AddChatPanel />
  );
}

export default ChatPanel;