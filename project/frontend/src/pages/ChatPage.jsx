import "../css/ChatPage.css";

import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/nav-bar";
import UserChatCard from "../components/user-chat-card";
import ChatMessageCard from "../components/chat-message-card";
import ChatBlackIcon from "../assets/chat-black-icon.png"

import SearchIcon from "../assets/search-icon.png";
import SendMessageIcon from "../assets/send-message-icon.png";

function ChatPage() {  
    return (
      <div className="chat-page">
          <NavBar />
          <div className="chat-bar">
              <div className="chat-header">
                  <img src={ChatBlackIcon} className="chat-icon-align" alt="start" />
                  <h1 className="chat-header-style">Chats</h1>
              </div>
              <div className="chat-search-div">
                  <input type="text" placeholder="Search Chats" className="chat-search" />
                  <button className="chat-search-button"></button>
              </div>
              <div className="chat-user-div">
                  <UserChatCard/>
                  <UserChatCard/>
                  <UserChatCard/>
              </div>
          </div>
          <div className="chat-container">
              <div className="vl"></div>
              <div className="chat-message-div">
                  <div className="outer-chat-message-div">
                      <div className="first-half-div">
                          {/* < ChatMessageCard/>
                          < ChatMessageCard/> */}
                      </div>
                      {/* <div className="second-half-div">
                          
                      </div> */}
                  </div>

              </div>
              <div className="chat-type-div">
                  <div className="outer-chat-message-div-2">
                      <input type="text" placeholder="Send Message" className="chat-type-container" />
                      <button className="send-message-btn"><img src={SendMessageIcon} className="send-message-icon-align" alt="start" /></button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default ChatPage
  