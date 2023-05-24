import "../css/NotificationPage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import ChatPreviewCard from "../components/ChatPreviewCard"
import NavBar from "../components/NavBar";

function NotificationPage() {
  const { userRole, userName, users, chats, setCurrentChatID, updateUser } = useContext(AppContext);
  const navigate = useNavigate();
  var userNotification = [];
  var chatSummary, chatDiscussion, chatID, chatCreatedAt;
  var userID;

  for (const user of users) {
    if (userName == user["name"]) {
      userID = user["_id"]
      userNotification = user["notification"]
    }
  }

  function readNotification(i) {
    userNotification.splice(i, 1);
    updateUser(userID, userNotification)
  }

  function handleNotificationRead() {
    readNotification();
    setCurrentChatID(0)
    navigate(`/chat/${chatID}`)
  }


  return (
    <div className="notification-page">
      <NavBar />
      <div className="notification-page-content">

        {userNotification.map(function (notification, i) {
          for (const chat of chats) {
            if (notification == chat["_id"]) {
              console.log("INSIDE IF !!!!!!!!!")
              chatID = chat["_id"];
              chatSummary = chat["summary"];
              chatDiscussion = chat["discussion"];
              chatCreatedAt = new Date(chat["createdAt"]).toLocaleDateString('en-GB');
            }
          }
          return (
            <button className="chat-notification-button" onClick={() => handleNotificationRead(i)} key={i}>
              <ChatPreviewCard
                summary={chatSummary}
                discussion={chatDiscussion}
                date={chatCreatedAt}
              />
            </button>
          );
        }
        )}
      </div>
    </div>
  );
}

export default NotificationPage;
