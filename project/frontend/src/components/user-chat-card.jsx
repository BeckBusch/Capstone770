import React from "react";
import "./user-chat-card.css";
// import { Link } from "react-router-dom";
import MyAccountBlackIcon from "../assets/my-account-icon-black.png"

function UserChatCard() {
    return (            
            
        <div className="user-chat-card-section">
            
            <div className="user-chat-card">

                <div className="user-chat-image">
                    <img src={MyAccountBlackIcon} className="user-image" alt="User"/>
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