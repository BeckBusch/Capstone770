import "../css/AddReplyPanel.css";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

function AddReplyPanel() {

  const { chats, currentChatID, updateReplies, userName, userRole } = useContext(AppContext);

  const [reply, setReply] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      handleUpdateReplies();
      resetFields();
    }
  };

  async function handleUpdateReplies() {
    const replies = chats.slice(0).reverse()[currentChatID]["replies"];
    replies.push([[reply], userName, userRole]);
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
