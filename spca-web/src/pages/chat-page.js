import React,  { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./chat-page.css";
import NavBar from "../components/nav-bar";
import UserChatCard from "../components/user-chat-card";
import ChatMessageCard from "../components/chat-message-card";


function ChatPage() {

    return (
        <div className="chat-page">
            <NavBar />
            <div className="chat-bar">
                <div className="chat-header">
                    <img src={require("../images/chat-black-icon.png")} className="chat-icon-align" alt="start" />
                    <h1 className="chat-header-style">Chats</h1>
                </div>
                <div className="chat-search-div">
                    <input type="text" placeholder="Search Chats" className="chat-search" />
                    <button className="chat-search-button"><img className="search-icon" src={require("../images/search-icon.png")} alt="Search" /></button>
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
                            {/* <div className="message-card">
                                <div className="message-card-user">
                                    <img src={require("../images/my-account-icon-black.png")} className="message-user-icon" alt="start" />
                                </div>
                                <div className="message-card-text">
                                    <p>abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop</p>
                                </div>
                            </div> */}
                            < ChatMessageCard/>
                            < ChatMessageCard/>
                        </div>
                        {/* <div className="second-half-div">
                            
                        </div> */}
                    </div>

                </div>
                <div className="chat-type-div">
                    <div className="outer-chat-message-div-2">
                        <input type="text" placeholder="Send Message" className="chat-type-container" />
                        <button className="send-message-btn"><img src={require("../images/send-message-icon.png")} className="send-message-icon-align" alt="start" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
