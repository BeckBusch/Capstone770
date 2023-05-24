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

  console.log("/////////////////////")
  console.log("userName: ", userName)
  var chatSummary, chatDiscussion, chatID, chatCreatedAt;

  for (const user of users) {
    if (userName == user["name"]) {
      userNotification = user["notification"]
        // for (const chat of chats) {
        //   if (userNotification[i][0] == chat["_id"] && userNotification[i][1] == 1) {
        //     console.log("match")
        //     chatID = chat["_id"]
        // chatSummary = chat["summary"]
        // chatDiscussion = chat["discussion"]
        // chatCreatedAt = new Date(chat["createdAt"]).toLocaleDateString('en-GB')
        // console.log("chatid summary: ", chatSummary)
        // console.log("chatid discussion: ", chatDiscussion)
        //   }
        // }
      
    }
  }
  console.log("userNoftificaiton: ", userNotification)

  function readNotification() {
    for (const user of users) {
      var saveArray = new Array();
      for (let i = 0; i < user["notification"].length; i++) {
        if (user["notification"][i][0] == chatID) {
          var pushArray = new Array(user["notification"][i][0], false);
          saveArray.push(pushArray)
        } else {
          saveArray.push(user["notification"][i])
        }
      }
      console.log("SAVE NEW ARRAY: ", saveArray)
      updateUser(user["_id"], saveArray)
    }
  }

  function handleNotificationRead() {
    // readNotification();
    setCurrentChatID(0)
    navigate(`/chat/${chatID}`)
  }


  return (
    <div className="notification-page">
      <NavBar />
      <div className="notification-page-content">

        {userNotification.map(function (notification, i) {
          console.log(notification[0]);

          for (const chat of chats) {
            console.log("CHATS LENGTH  " + chats.length);
            console.log(chat["_id"]);

          if (notification[0] == chat["_id"] && notification[1] == true) {
          console.log("INSIDE IF !!!!!!!!!")
              chatSummary = chat["summary"];
              chatDiscussion = chat["discussion"];
              chatCreatedAt = new Date(chat["createdAt"]).toLocaleDateString('en-GB');
            }
          }

            console.log("CHAT SUMMARY " + chatSummary)
            console.log("CHAT DIS " + chatDiscussion)
            console.log("CHAT CREATED " + chatCreatedAt)

            return (

              <button className="chat-notification-button" onClick={() => handleNotificationRead()} key={i}>
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
