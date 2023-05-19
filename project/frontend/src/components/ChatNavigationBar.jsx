import "../css/ChatNavigationBar.css";
import ChatPreviewCard from "../components/ChatPreviewCard";
import ChatBlackIcon from "../assets/chat-black-icon.png";

import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { useNavigate } from "react-router-dom";

function ChatNavigationBar() {
  // const { chats } = useContext(AppContext);

  // const [currentChatID, setCurrentChatID ] = useState("");

  // const navigate = useNavigate();

  // function handleAddChat() {
  //   navigate('/add-chat')
  // }

  // function handlePreviewClick(id, i) {
  //   setCurrentChatID(i)
  //   navigate(`/chat/${id}`);
  // }
  
  // return (
  //   <div className="chat-navigation-bar">
  //       <div className="chat-header-div">
  //         <img src={ChatBlackIcon} className="chat-icon-align" alt="start" />
  //         <h1 className="chat-header">Chats</h1>
  //       </div>

  //       <div className="add-chat-container-div">
  //         <button className="add-chat-btn" onClick={() => handleAddChat()}>
  //           + Start New Discussion
  //         </button>
  //       </div>

  //       <div className="chat-search-div">
  //         <input
  //           type="text"
  //           placeholder="Search Chats"
  //           className="chat-search"
  //         />
  //         <button className="chat-search-button"></button>
  //       </div>

  //       <div className="scroll">
  //       {chats.slice(0).reverse().map(function (chat, i) {
  //         return (
  //           <button
  //             className="chat-preview-btn"
  //             onClick={() => handlePreviewClick(chat["_id"], i)}
  //             key={i}
  //           >
  //             <ChatPreviewCard
  //               key={i}
  //               className="dog-card"
  //               summary={chat["summary"]}
  //               discussion={chat["discussion"]}
  //               user={chat["user"]}
  //             />
  //           </button>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
}

export default ChatNavigationBar;
