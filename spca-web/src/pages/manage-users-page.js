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
                                        <div class="type-dropdown">
                                            <button class="dropdownbtn"><i class="type-arrow type-down"></i></button>
                                            <div class="type-dropdown-content">
                                                <a href="#">Vet</a>
                                                <a href="#">Volunteer</a>
                                            </div>
                                        </div>   
                                    </td>
                                    <td>
                                        <button className="yes-btn">yes</button>
                                        <button className="no-btn">no</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="options-container">
                <div class="three-columns-grid">
                    <div>
                        <div>
                            <label for="Username/Email">Username/Email</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Search" className="user-email-search"/>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label for="UserType">User Type</label>
                        </div>
                        <div className="type">
                            <div class="option-type-dropdown">
                                <button class="dropdownbutton"><i class="option-type-arrow option-type-down"></i></button>
                                <div class="option-type-dropdown-content">
                                    <a href="#">Vet</a>
                                    <a href="#">Volunteer</a>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div>
                        <div>
                            <label></label>
                        </div>
                        <div><button className="add-user-btn">Add User</button></div>

                    </div>
                </div>
            </div>

            <div className="pending-users-container">
                <label>Users (2)</label>
                <div className="p-users-container">
                    <div>
                        <table class="pending-users-table" id="pendingUsersTable">
                            <thead>
                                <th></th>
                                <th>Users</th>
                                <th>Email</th>
                                <th>User Type</th>
                                <th>Joined</th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="profile-image"><img src={require("../images/settings-black-icon.png")} className="profile-image-align" alt="start" /></td>
                                    <td>Jess Mo</td>
                                    <td>jessmo76@gmail.com</td>
                                    <td>
                                        <div class="type-dropdown">
                                            <button class="dropdownbtn"><i class="type-arrow type-down"></i></button>
                                            <div class="type-dropdown-content">
                                                <a href="#">Vet</a>
                                                <a href="#">Volunteer</a>
                                            </div>
                                        </div>                                     
                                    </td>
                                    <td>27/04/2023</td>
                                    <td>
                                        <button className="remove-btn">Remove X</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="profile-image"><img src={require("../images/settings-black-icon.png")} className="profile-image-align" alt="start" /></td>
                                    <td>Matthew Adamas</td>
                                    <td>obleee88@gmail.com</td>
                                    <td>
                                        <div class="type-dropdown">
                                            <button class="dropdownbtn"><i class="type-arrow type-down"></i></button>
                                            <div class="type-dropdown-content">
                                                <a href="#">Vet</a>
                                                <a href="#">Volunteer</a>
                                            </div>
                                        </div> 
                                    </td>
                                    <td>03/04/2023</td>
                                    <td>
                                        <button className="remove-btn">Remove X</button>
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
        
        </div>
    )
}

export default ManageUsersPage;