import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";
import "../css/AddChatPanel.css";
import AuthDetails from "../AuthDetails";

function AddChatPanel() {

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
    <div className="add-chat-page">
      <div className="add-chat-page-content">
        <h1 className="add-chat-header ">New Discussion</h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="summary-div">
            <label htmlFor="ChatTitle">Summary</label>
            <input
              className="chat-input-styling"
              type="text"
              id="summary"
              placeholder="Please provide a short summary of the discussion ..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          <label htmlFor="Password">Discussion</label>
          <textarea
            className="paragraph"
            placeholder="Start discussion about ..."
            value={discussion}
            onChange={(e) => setDiscussion(e.target.value)}
          />

          <div className="add-user-error-msg text-align-right">
            <p>{errorMessage}</p>
          </div>

          {/* Buttons */}
          <div className="buttons-div">
              <button type="submit" id="postChatBtn" className="post-btn">
                + Post
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddChatPanel;
