import "../css/ChatPanel.css";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

import AddChatPanel from "./AddChatPanel";

function ChatPanel(props) {
  const { chats } = useContext(AppContext);

  return props.id >= 0 ? (
    <div className="chat-panel">
      <div className="chat-panel-details">
        <h1 className="chat-panel-title">
          {chats.slice(0).reverse()[props.id]["summary"]}
        </h1>
        <p className="chat-panel-user">
          Posted by {chats.slice(0).reverse()[props.id]["user"]}
        </p>
        <p className="chat-panel-date">
          {chats.slice(0).reverse()[props.id]["createdAt"]}
        </p>
        <p className="chat-panel-message">
          {chats.slice(0).reverse()[props.id]["discussion"]}
        </p>
      </div>
    </div>
  ) : (
    <AddChatPanel />
  );
}

export default ChatPanel;
