import React from "react";
import "./user-chat-card.css";
// import { Link } from "react-router-dom";

function UserChatCard() {
    return (            
            
        <div className="user-chat-card-section">
            
            <div className="user-chat-card">

                <div className="user-chat-image">
                    <img src={require("../images/my-account-icon-black.png")} className="user-image" alt="User"/>
                </div>

                <div className="user-chat-card-details">
                    <h1 className="user-name-header">Name</h1>
                    <p className="recent-message">Recent Messsage</p>
                </div>
            </div>
        </div>
    );
}

export default UserChatCard;