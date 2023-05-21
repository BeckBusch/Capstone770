import "../css/ReplyPanel.css";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

function ReplyPanel() {
  const { chats, currentChatID } = useContext(AppContext);

  const chatsReverse = chats.slice(0).reverse();
  const replies = chatsReverse[currentChatID]["replies"].slice(0).reverse();

  return (
    <div className="reply-panel">
      {replies.map(function (reply, i) {
        return (
          <div className="reply-panel-right" key={i}>
            <div className="reply">
              <div className="reply-panel-card">
                <div className="reply-panel-details">
                  <div className="reply-user-info">
                    <p className="reply-user">
                      <b>{reply[1]}</b> <i>&#40;{reply[2]}</i>&#41;
                    </p>
                    <p className="reply-date">{reply[3]}</p>
                  </div>
                  <p className="reply-message">{reply[0]}</p>
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
