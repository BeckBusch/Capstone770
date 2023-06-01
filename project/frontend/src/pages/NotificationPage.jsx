import "../css/NotificationPage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import ChatPreviewCard from "../components/ChatPreviewCard"
import NavBar from "../components/NavBar";

function NotificationPage() {
  const { userName, users, chats, setCurrentChatID, updateUser } = useContext(AppContext);
  const navigate = useNavigate();
  var userNotification = [];
  var chatSummary, chatDiscussion, chatID, chatReplyDate, chatReplyUser, userID;

  for (const user of users) {
    if (userName == user["name"]) {
      userID = user["_id"]
      userNotification = user["notification"]
    }
  }

  async function readNotification(i) {
    userNotification.splice(i, 1);
    await updateUser(userID, userNotification)
  }

  function handleNotificationRead(chatID) {
    console.log("chatID " + chatID);

    readNotification();
    setCurrentChatID(0)
    navigate(`/chat/${chatID}`)
  }


  return (
    <div className="notification-page">
      <NavBar />
      <div className="notification-page-content">
        <div className="notification-page-left">
        <div className="notification-header">
          {/* <h1> {userNotification.length}</h1> */}
          <h1 className="notification-header-line-1">{userNotification.length}</h1>
          <h1 className="notification-header-line-2">New</h1>
          <h1 className="notification-header-line-3">Notifications</h1>

        </div>
        </div>

        <div className="notification-page-right">
        <div className="notification-panel">
          {
          userNotification.length == 0 ? <p>No New Notifications</p> :
          
          userNotification.map(function (notification, i) {
            for (const chat of chats) {
              if (notification == chat["_id"]) {
                console.log("INSIDE IF !!!!!!!!!");
                chatID = chat["_id"];
                chatSummary = chat["summary"];
                chatDiscussion = chat["discussion"];
                chatReplyUser = chat["replies"][chat["replies"].length - 1][1];
                chatReplyDate = chat["replies"][chat["replies"].length - 1][3];
              }
            }
            return (
              // <div key={i}>
              <button
                className="notification-button"
                onClick={() => handleNotificationRead(chatID)}
                key={i}
              >
                <p className="notification-summary">{chatSummary}</p>
                <p className="notification-discussion">
                  New discussion added by {chatReplyUser} ({chatReplyDate})
                </p>
              </button>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

export default NotificationPage;
