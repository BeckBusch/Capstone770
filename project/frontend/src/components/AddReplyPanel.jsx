import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";
import "../css/AddReplyPanel.css";
import AuthDetails from "../AuthDetails";

function AddReplyPanel() {

  AuthDetails();

  const {
    userName,
    addChat
  } = useContext(AppContext);

  const [summary, setSummary] = useState("");
  const [discussion, setDiscussion] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      handleAddChat();
      resetFields();
    }
  }

  async function handleAddChat() {
    await addChat(summary, discussion, userName);
  }
  
  function resetFields() {
    setSummary("");
    setDiscussion("");
    setErrorMessage("");
  }

  function checkForm() {
    if (isSummaryEmpty()) {
      setErrorMessage("Summary cannot be empty.");
      return false;
    } else if (isDiscussionEmpty()) {
      setErrorMessage("Discussion cannot be empty.");
      return false;
    } else {
      return true;
    }
  }

  function isSummaryEmpty() {
    return summary.trim().length == 0 ? true : false;
  }

  function isDiscussionEmpty() {
    return discussion.trim().length == 0 ? true : false;
  }

  return (
    <div className="add-reply-page">

        <form onSubmit={handleSubmit}>

          <textarea
            className="reply-paragraph"
            placeholder="Reply to discussion ..."
            value={discussion}
            onChange={(e) => setDiscussion(e.target.value)}
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
      {/* </div> */}
    </div>
  );
}

export default AddReplyPanel;
