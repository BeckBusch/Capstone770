import React from "react";
import "./chat-message-card.css";
// import { Link } from "react-router-dom";
import MyAccountBlackIcon from "../assets/my-account-icon-black.png"

function ChatMessageCard() {
    return (            
            
        <div className="chat-message-card-section">

            <div className="chat-message-card">
                <div className="chat-message-card-user">
                    <img src={MyAccountBlackIcon} className="chat-message-card-user-icon" alt="start" />
                </div>
                <div className="chat-message-card-text">
                    <p className="paragraph-text">abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop</p>
                </div>
                {/* <div className="chat-message-card-text">
                    <p>abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop qrstuv wxyz abcdefg hijklmnop</p>
                </div> */}
            </div>
    
        </div>
    );
}

export default ChatMessageCard;