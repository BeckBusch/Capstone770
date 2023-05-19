import "../css/ReplyPanel.css";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

function ReplyPanel() {
  const { chats, currentChatID } = useContext(AppContext);

  const chatsReverse = chats.slice(0).reverse();
  const replies = chatsReverse[currentChatID]["replies"];

  return (
    <div>
      {replies.map(function (reply, i) {
        console.log(reply);
        return (
          <div className="reply-panel" key={i}>
            <div className="reply-panel-card" >
              <div className="reply-panel-details">
                <p>{reply}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReplyPanel;
