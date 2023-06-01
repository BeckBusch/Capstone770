import "../css/AddChatPanel.css";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

function AddChatPanel() {

  const { userName, userRole, addChat } = useContext(AppContext);

  const [summary, setSummary] = useState("");
  const [discussion, setDiscussion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      handleAddChat();
      resetFields();
    }
  };

  async function handleAddChat() {
    await addChat(summary, discussion, userName, userRole);
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

          <div className="chat-submit-div">
            <div className="error-msg-div">
              <p>{errorMessage}</p>
            </div>
            <div className="button-div">
              <button type="submit" id="postChatBtn" className="post-btn">
                + Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddChatPanel;
