import React from "react"
// import { Link } from "react-router-dom";
import NavBarAdmin from "../components/nav-bar-admin";
import "./manage-users-page.css";

function ManageUsersPage() {
    return (
        <div className="manage-users-page">
            <NavBarAdmin/>   
            <div className="header-container">
                <img src={require("../images/settings-black-icon.png")} className="settings-icon-align" alt="start" />
                <h1 className="start-weighing-header">Start Weighing</h1>
            </div>        
            <div className="pending-users-container">
                <label>Pending Users (1)</label>
                <div className="p-users-container">
                    <div>
                        <table class="pending-users-table" id="pendingUsersTable">
                            <thead>
                                <th></th>
                                <th>Users</th>
                                <th>Email</th>
                                <th>User Type</th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="profile-image"><img src={require("../images/settings-black-icon.png")} className="profile-image-align" alt="start" /></td>
                                    <td>Jess Mo</td>
                                    <td>jessmo76@gmail.com</td>
                                    <td>
                                        <button>dropdown</button>
                                    </td>
                                    <td>
                                        <button>yes</button>
                                        <button>no</button>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td><img src={require("../images/settings-black-icon.png")} className="settings-icon-align" alt="start" /></td>
                                    <td>6.03</td>
                                    <td>02/03/2023</td>
                                    <td>3:10 PM</td>        
                                </tr>
                                <tr>
                                    <td><img src={require("../images/settings-black-icon.png")} className="settings-icon-align" alt="start" /></td>
                                    <td>8.08</td>
                                    <td>03/03/2023</td>
                                    <td>10:30 AM</td>        
                                </tr> */}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="options-container">
                <div className="search-container">
                    <label className="label-align">Username/Email</label>
                    <div className="search-user-div">
                        <input type="text" placeholder="Search" className="user-email-search"/>
                        {/* <input type="submit" value=""/>  */}
                        <button className="search-button">
                            <img src={require("../images/search-icon.png")} className="search-icon" alt="search" />
                            </button>
                    </div>
                </div>

                <div className="type-container">
                    <label className="label-align">User Type</label>

                </div>
            </div>
        </div>
    )
}

export default ManageUsersPage;