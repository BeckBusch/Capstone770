import "../css/NavBar.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AppContext } from "../AppContextProvider";

import SPCALogo from "../assets/nav-icon-spca-logo.png";
import DashboardIcon from "../assets/nav-icon-dashboard.png";
import ChatIcon from "../assets/nav-icon-chat-white.png";
import MyAccountIcon from "../assets/icon-account-white.png";
import ManageUsersIcon from "../assets/nav-icon-settings-white.png";
import SignOutIcon from "../assets/icon-sign-out.png";
import NotificationIcon from "../assets/icon-notification.png";

import AuthDetails from "../AuthDetails";

function NavBar() {
  AuthDetails();

  const { userRole, userName, users } = useContext(AppContext);

  const [signOutPopUpVisible, setSignOutPopUpVisible] = useState(false);

  let count = 0;
  for (const user of users) {
    if (userName == user["name"]) {
      const userNotification = user["notification"]
      count = userNotification.length
    }
  }
  
  function handlePopUpDisplay() {
    if (signOutPopUpVisible) {
      document.getElementById("mySignOutDropdown").style.display = "none";
      setSignOutPopUpVisible(false);
    } else {
      document.getElementById("mySignOutDropdown").style.display = "block";
      setSignOutPopUpVisible(true);
    }
  }

  const navigate = useNavigate();
  
  function signOutUser() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return userRole == "Admin" ? (
    <div className="nav-bar">
      <div className="col-left">
        <img className="navbar-logo" src={SPCALogo} alt="SPCA Logo" />
      </div>

      <div className="col-mid">
        <Link to="/dashboard">
          <button type="submit" id="logInBtn" className="navbar-link-button">
            <img className="navbar-icon" src={DashboardIcon} alt="Dashboard" />
            <p className="navbar-link-text">Dashboard</p>
          </button>
        </Link>
      </div>

      <div className="col-mid">
        <Link to="/chat">
          <button type="submit" id="logInBtn" className="navbar-link-button">
            <img className="navbar-icon" src={ChatIcon} alt="Chat" />
            <p className="navbar-link-text">Chat</p>
          </button>
        </Link>
      </div>

      <div className="col-mid">
        <Link to="/manage-users">
          <button type="submit" id="logInBtn" className="navbar-link-button">
            <img
              className="navbar-icon"
              src={ManageUsersIcon}
              alt="Users"
            />
            <p className="navbar-link-text">Users</p>
          </button>
        </Link>
      </div>

      <div className="col-mid-right">
        <Link to="/notification">
          <button type="submit" id="logInBtn" className="navbar-link-button-2">
            <img className="navbar-icon" src={NotificationIcon} alt="Notifications" />
            <p className="navbar-link-text">({count})</p>
          </button>
        </Link>
      </div>

      <div className="col-right">
        <div className="account-settings-align">
          <div className="dropdown">
            <button
              onClick={() => handlePopUpDisplay()}
              className="sign-out-dropbtn"
            >
              <div className="b-container">
                <div>
                  <span className="line-1">{userName}</span>
                  <span className="line-2">{userRole}</span>
                </div>
                <div className="my-account-icon-align-2">
                  <img
                    className="navbar-icon"
                    src={MyAccountIcon}
                    alt="My Account"
                  />
                </div>
              </div>
            </button>

            <button
              id="mySignOutDropdown"
              className="sign-out-btn"
              onClick={() => signOutUser()}
            >
              <img
                className="sign-out-icon"
                src={SignOutIcon}
                alt="Dashboard"
              />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="nav-bar">
      <div className="col-left">
        <img className="navbar-logo" src={SPCALogo} alt="SPCA Logo" />
      </div>

      <div className="col-mid">
        <Link to="/dashboard">
          <button type="submit" id="logInBtn" className="navbar-link-button">
            <img className="navbar-icon" src={DashboardIcon} alt="Dashboard" />
            <p className="navbar-link-text">Dashboard</p>
          </button>
        </Link>
      </div>

      <div className="col-mid">
        <Link to="/chat">
          <button type="submit" id="logInBtn" className="navbar-link-button">
            <img className="navbar-icon" src={ChatIcon} alt="Chat" />
            <p className="navbar-link-text">Chat</p>
          </button>
        </Link>
      </div>

      <div className="col-mid-right">
        <Link to="/notification">
          <button type="submit" id="logInBtn" className="navbar-link-button-2">
            <img className="navbar-icon" src={NotificationIcon} alt="Notifications" />
            <p className="navbar-link-text">({count})</p>
          </button>
        </Link>
      </div>

      <div className="col-right">
        <div className="account-settings-align">
          <div className="dropdown">
            <button
              onClick={() => handlePopUpDisplay()}
              className="sign-out-dropbtn"
            >
              <div className="b-container">
                <div>
                  <span className="line-1">{userName}</span>
                  <span className="line-2">{userRole}</span>
                </div>
                <div className="my-account-icon-align-2">
                  <img
                    className="navbar-icon"
                    src={MyAccountIcon}
                    alt="My Account"
                  />
                </div>
              </div>
            </button>

            <button
              id="mySignOutDropdown"
              className="sign-out-btn"
              onClick={() => signOutUser()}
            >
              <img
                className="sign-out-icon"
                src={SignOutIcon}
                alt="Dashboard"
              />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
