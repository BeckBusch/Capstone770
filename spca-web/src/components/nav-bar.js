import React from "react";
import "./nav-bar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar">

            <div className="col col-left">
            <Link to="/manage-users">
                <img className="navbar-logo" src={require("../images/dashboard-logo.png")} alt="SPCA Logo" />
            </Link>
            </div>

            <div className="col col-mid">
                <Link to="/dashboard">
                    <img className="navbar-icon" src={require("../images/dashboard-icon.png")} alt="Dashboard" />
                    <button type="submit" id="logInBtn" className="navbar-link">Dashboard</button>
                </Link>
            </div>

            <div className="col col-mid">
                <Link to="/chat">
                    <img className="navbar-icon" src={require("../images/chat-icon.png")} alt="Dashboard" />
                    <button type="submit" id="logInBtn" className="navbar-link">Chat</button>
                </Link>
            </div>

            <div className="col col-right">
                <Link to="/my-account">
                    <button type="submit" id="logInBtn" className="navbar-link">My Account</button>
                    <img className="navbar-icon" src={require("../images/my-account-icon.png")} alt="Dashboard" />
                </Link>
            </div>

        </div>
    );
}

export default NavBar;