import "../css/AddReplyPanel.css";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

function AddReplyPanel() {

  const { chats, currentChatID, updateReplies, userName, userRole, users, updateUser } = useContext(AppContext);

  const [reply, setReply] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      handleUpdateReplies();
      resetFields();
      sendNotification();
    }
  };

  function sendNotification() {
    const discussionID = chats.slice(0).reverse()[currentChatID]["_id"];
    const discussionIDUser = chats.slice(0).reverse()[currentChatID]["userName"]
    for (const user of users) {
      if (discussionIDUser == user["name"]) {
        const noficationArray = new Array(discussionID);
        var saveArray = new Array();
        for (let i = 0; i < user["notification"].length; i++) {
          saveArray.push(user["notification"][i])
        }
        saveArray.push(noficationArray)
        updateUser(user["_id"], saveArray)
      }
    } 
  }

  async function handleUpdateReplies() {
    const replies = chats.slice(0).reverse()[currentChatID]["replies"];
    
    replies.push([[reply], userName, userRole, new Date().toLocaleDateString('en-GB')]);
    await updateReplies(
      chats.slice(0).reverse()[currentChatID]["_id"],
      replies
    );
  }

  function resetFields() {
    setReply("");
  }

  function checkForm() {
    if (isSummaryEmpty()) {
      setErrorMessage("Reply cannot be empty.");
      return false;
    } else {
      return true;
    }
  }

  function isSummaryEmpty() {
    return reply.trim().length == 0 ? true : false;
  }

  return (
    <div className="add-reply-page">
      <form onSubmit={handleSubmit}>
        <textarea
          className="reply-paragraph"
          placeholder="Reply to discussion ..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <div className="chat-submit-div">
          <div className="error-msg-div">
            <p>{errorMessage}</p>
          </div>
          <div className="button-div">
            <button type="submit" id="postChatBtn" className="reply-btn">
              Reply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReplyPanel;
