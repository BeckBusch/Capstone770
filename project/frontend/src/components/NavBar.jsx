import "../css/NavBar.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import DashboardLogo from "../assets/dashboard-logo.png";
import DashboardIcon from "../assets/dashboard-icon.png";
import ChatIcon from "../assets/chat-icon.png";
import MyAccountIcon from "../assets/my-account-icon.png";
import ManageUsersIcon from "../assets/settings-icon.png";
import SignOutIcon from "../assets/exit.png";

function NavBar() {
  const { userRole, userName } = useContext(AppContext);

  console.log("userrole " + userRole);
  console.log("username " + userName);

  /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
  function myFunction() {
    useEffect(() => {
      document.getElementById("mySignOutDropdown").classList.toggle("showing");
    });
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".sign-out-dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("showing")) {
          openDropdown.classList.remove("showing");
        }
      }
    }
  };

  return userRole == "Admin" ? (
    <div className="nav-bar">
      <div className="col col-left">
        <img className="navbar-logo" src={DashboardLogo} alt="SPCA Logo" />
      </div>

      <div className="col col-mid">
        <Link to="/dashboard">
          <button type="submit" id="logInBtn" className="navbar-link-button">
              <img className="navbar-icon" src={DashboardIcon} alt="Dashboard" />
                <p className="navbar-link-text">Dashboard</p>
          </button>
        </Link>
      </div>

      <div className="col col-mid">
        <Link to="/chat">
          <button type="submit" id="logInBtn" className="navbar-link-button">
          <img className="navbar-icon" src={ChatIcon} alt="Dashboard" />
          <p className="navbar-link-text">Chat</p>
          </button>
        </Link>
      </div>

      <div className="col col-mid">
        <Link to="/manage-users">
          <button type="submit" id="logInBtn" className="navbar-link-button">
          <img className="navbar-icon" src={ManageUsersIcon} alt="Dashboard" />
          <p className="navbar-link-text">Manage Users</p>
          </button>
        </Link>
      </div>

      <div className="col col-right">
        <div className="account-settings-align">
          <div className="dropdown">
            <button onClick={myFunction()} className="sign-out-dropbtn">
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

            <div id="mySignOutDropdown" className="dropdown-content">
              <a href="/">
                <img
                  className="sign-out-icon"
                  src={SignOutIcon}
                  alt="Dashboard"
                />
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="nav-bar">
      <div className="col col-left">
        <img className="navbar-logo" src={DashboardLogo} alt="SPCA Logo" />
      </div>

      <div className="col col-mid">
        <Link to="/dashboard">
          <button type="submit" id="logInBtn" className="navbar-link-button">
              <img className="navbar-icon" src={DashboardIcon} alt="Dashboard" />
                <p className="navbar-link-text">Dashboard</p>
          </button>
        </Link>
      </div>

      <div className="col col-mid">
        <Link to="/chat">
          <button type="submit" id="logInBtn" className="navbar-link-button">
          <img className="navbar-icon" src={ChatIcon} alt="Dashboard" />
          <p className="navbar-link-text">Chat</p>
          </button>
        </Link>
      </div>

      <div className="col col-right">
        <div className="account-settings-align">
          <div className="dropdown">
            <button onClick={myFunction()} className="sign-out-dropbtn">
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
            <div id="mySignOutDropdown" className="dropdown-content">
              <a href="/*">
                <img
                  className="sign-out-icon"
                  src={SignOutIcon}
                  alt="Dashboard"
                />
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
