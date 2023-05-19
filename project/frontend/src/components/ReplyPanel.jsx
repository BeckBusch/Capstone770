import "../css/ReplyPanel.css";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

function ReplyPanel() {
  const { chats, currentChatID } = useContext(AppContext);

  const chatsReverse = chats.slice(0).reverse();
  const replies = chatsReverse[currentChatID]["replies"];

  return (
    <div className="reply-panel">
      {replies.map(function (reply, i) {
        return (
          <div className="reply-panel-right" key={i}>
            <div className="reply">
              <div className="reply-panel-card">
                <div className="reply-panel-details">
                  <p>{reply}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReplyPanel;
