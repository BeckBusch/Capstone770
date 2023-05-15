import React from "react";
import "./chat-message-card.css";
// import { Link } from "react-router-dom";

function ChatMessageCard() {
    return (            
            
        <div className="chat-message-card-section">

            <div className="chat-message-card">
                <div className="chat-message-card-user">
                    <img src={require("../images/my-account-icon-black.png")} className="chat-message-card-user" alt="start" />
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