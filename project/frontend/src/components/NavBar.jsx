import "../css/NavBar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import DashboardLogo from "../assets/dashboard-logo.png";
import DashboardIcon from "../assets/dashboard-icon.png";
import ChatIcon from "../assets/chat-icon.png";
import MyAccountIcon from "../assets/my-account-icon.png";
import ManageUsersIcon from "../assets/settings-icon.png";

function NavBar() {
    const {userRole, setUserRole} = useContext(AppContext);

    console.log("userrole "  + userRole)

    return (userRole == "Admin") ? (
        <div className="nav-bar">

            <div className="col col-left">
                <img className="navbar-logo" src={DashboardLogo} alt="SPCA Logo" />
                {/* <Link to="/sign-in">Sign In</Link> */}
            </div>

            <div className="col col-mid">
                <Link to="/dashboard">
                    <img className="navbar-icon" src={DashboardIcon} alt="Dashboard" />
                    <button type="submit" id="logInBtn" className="navbar-link">Dashboard</button>
                </Link>
            </div>

            <div className="col col-mid">
                <Link to="/chat">
                    <img className="navbar-icon" src={ChatIcon} alt="Dashboard" />
                    <button type="submit" id="logInBtn" className="navbar-link">Chat</button>
                </Link>
            </div>

            <div className="col col-mid">
                <Link to="/manage-users">
                    <img className="navbar-icon" src={ManageUsersIcon} alt="Dashboard" />
                    <button type="submit" id="logInBtn" className="navbar-link">Manage Users</button>
                </Link>
            </div>

            <div className="col col-right">
                <Link to="/account-settings/:id">
                    <button type="submit" id="logInBtn" className="navbar-link">My Account</button>
                    <img className="navbar-icon" src={MyAccountIcon} alt="Dashboard" />
                </Link>
            </div>

        </div>
    ) : (
        <div className="nav-bar">

            <div className="col col-left">
                <img className="navbar-logo" src={DashboardLogo} alt="SPCA Logo" />
            </div>

            <div className="col col-mid">
                <Link to="/dashboard">
                    <img className="navbar-icon" src={DashboardIcon} alt="Dashboard" />
                    <button type="submit" id="logInBtn" className="navbar-link">Dashboard</button>
                </Link>
            </div>

            <div className="col col-mid">
                <Link to="/chat">
                    <img className="navbar-icon" src={ChatIcon} alt="Dashboard" />
                    <button type="submit" id="logInBtn" className="navbar-link">Chat</button>
                </Link>
            </div>

            <div className="col col-right">
                <Link to="/account-settings/:id">
                    <button type="submit" id="logInBtn" className="navbar-link">My Account</button>
                    <img className="navbar-icon" src={MyAccountIcon} alt="Dashboard" />
                </Link>
            </div>

        </div>
    )
} 

export default NavBar;