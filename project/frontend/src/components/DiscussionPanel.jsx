import "../css/DiscussionPanel.css";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

import AddChatPanel from "./AddChatPanel";
import AddReplyPanel from "./AddReplyPanel";
import ChatPanel from "./ChatPanel";
import ReplyPanel from "./ReplyPanel";

function DiscussionPanel() {
  const { currentChatID } = useContext(AppContext);

  return currentChatID >= 0 ? (
    <div className="discussion-panel">
      
      <ChatPanel />

      {/* <ReplyPanel /> */}

      <AddReplyPanel />
      <ReplyPanel />


    </div>
  ) : (
    <AddChatPanel />
  );
}

export default DiscussionPanel;
