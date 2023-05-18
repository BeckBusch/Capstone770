import "../css/NavBar.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AppContext } from "../AppContextProvider";

import DashboardLogo from "../assets/dashboard-logo.png";
import DashboardIcon from "../assets/dashboard-icon.png";
import ChatIcon from "../assets/chat-icon.png";
import MyAccountIcon from "../assets/my-account-icon.png";
import ManageUsersIcon from "../assets/settings-icon.png";
import SignOutIcon from "../assets/exit.png";

import AuthDetails from "../AuthDetails";

function NavBar() {
  const { users, userRole, setUserRole, userName, setUserName, setLoggedIn } = useContext(AppContext);

  // auth.onAuthStateChanged(function (user) {
  //   if (user) {
  //     setLoggedIn(true);
  //     console.log("ONAUTHSTATE")
  //     console.log(user)
  //     getCurrentUser(user);

  //   } else {
  //     setLoggedIn(false);
  //   }
  // });

  // function getCurrentUser(userImpl) {
  //   for (const user of users) {
  //     if (user["email"] == userImpl["email"]) {
  //       setUserRole(user["role"]);
  //       setUserName(user["name"]);
  //     }
  //   }
  // }

  AuthDetails();

  const [signOutPopUpVisible, setSignOutPopUpVisible] = useState(false);

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
        <img className="navbar-logo" src={DashboardLogo} alt="SPCA Logo" />
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
            <img className="navbar-icon" src={ChatIcon} alt="Dashboard" />
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
              alt="Dashboard"
            />
            <p className="navbar-link-text">Manage Users</p>
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
                    alt="Dashboard"
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
        <img className="navbar-logo" src={DashboardLogo} alt="SPCA Logo" />
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
            <img className="navbar-icon" src={ChatIcon} alt="Dashboard" />
            <p className="navbar-link-text">Chat</p>
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
                    alt="Dashboard"
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
