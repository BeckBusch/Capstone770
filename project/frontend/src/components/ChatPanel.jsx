import "../css/ChatPanel.css";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

import AddChatPanel from "./AddChatPanel";

function ReplyPanel() {
  const { chats, currentChatID } = useContext(AppContext);

  const chatsReverse = chats.slice(0).reverse();

  return currentChatID >= 0 ? (
    <div className="chat-panel">
      <div className="chat-panel-question">
        <div className="chat-panel-details">
          <h1 className="chat-panel-title">
            {chatsReverse[currentChatID]["summary"]}
          </h1>
          <p className="chat-panel-user">
            Posted by {chatsReverse[currentChatID]["userName"]} &#40;{chatsReverse[currentChatID]["userRole"]}&#41;
          </p>
          <p className="chat-panel-date">
            {new Date(chatsReverse[currentChatID]["createdAt"]).toLocaleDateString('en-GB')}
          </p>
          <p className="chat-panel-discussion">
            {chatsReverse[currentChatID]["discussion"]}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <AddChatPanel />
  );
}

export default ReplyPanel;
