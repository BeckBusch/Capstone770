import React from "react"
import { Link } from "react-router-dom";
import NavBarAdmin from "../components/nav-bar-admin";
import "./manage-users-page.css";

function ManageUsersPage() {
    return (
        <div className="manage-users-page">
            <NavBarAdmin/>   
            <div className="manage-header-container">
                <img src={require("../images/settings-black-icon.png")} className="settings-icon-align" alt="start" />
                <h1 className="manage-users-header">Manage Users</h1>
            </div>        
            <div className="pending-users-container">
                <label>Pending Users (1)</label>
                <div className="p-users-container">
                    <div>
                        <table className="pending-users-table" id="pendingUsersTable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Users</th>
                                    <th>Email</th>
                                    <th>User Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="profile-image"><img src={require("../images/settings-black-icon.png")} className="profile-image-align" alt="start" /></td>
                                    <td>Jess Mo</td>
                                    <td>jessmo76@gmail.com</td>
                                    <td>
                                    <select className="custom-select" id="language" >
                                        <option value="English">English</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="French">French</option> 
                                    </select>
                                        {/* <div className="type-dropdown">
                                            <button className="dropdownbtn"><i className="type-arrow type-down"></i></button>
                                            <div className="type-dropdown-content">
                                                <a href="#">Vet</a>
                                                <a href="#">Volunteer</a>
                                                <a href="#">Admin</a>
                                            </div>
                                        </div>    */}
                                    </td>
                                    <td>
                                        <button className="yes-btn">
                                            <img src={require("../images/yes-icon.png")} className="yes-no-btn-align" alt="start" />
                                            <img src={require("../images/yes-hover-icon.png")} className="yes-img-top" alt="Card Front" /> 
                                        </button>
                                        <button className="no-btn">
                                            <img src={require("../images/no-icon.png")} className="yes-no-btn-align" alt="start" />
                                            <img src={require("../images/no-hover-icon.png")} className="no-img-top" alt="start" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="options-container">
                <div className="three-columns-grid">
                    <div className="col-one">
                        <div>
                            <label htmlFor="Username/Email">Username/Email</label>
                        </div>
                        <div className="search-user-div">
                            <input type="text" placeholder="Search" className="search-input"/>
                            <button className="search-button"><img className="search-icon" src={require("../images/search-icon.png")} alt="Search" /></button>
                        </div>
                    </div>

                    <div className="col-two">
                        <div>
                            <label htmlFor="UserType">User Type</label>
                        </div>
                        <div className="type">
                            <div className="option-type-dropdown">
                                <button className="dropdownbutton"><i className="option-type-arrow option-type-down"></i></button>
                                <div className="option-type-dropdown-content">
                                    <a href="#">Vet</a>
                                    <a href="#">Volunteer</a>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div className="col-three">
                        <div>
                            <label></label>
                        </div>
                        <div>
                        <Link to="/add-user">
                            <button type="submit" id="AddUserBtn" className="add-user-btn">
                            <img src={require("../images/add-user-icon.png")} className="add-user-align" alt="start" />
                            Add User</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pending-users-container">
                <label>Users (2)</label>
                <div className="p-users-container">
                    <div>
                        <table className="pending-users-table" id="pendingUsersTable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Users</th>
                                    <th>Email</th>
                                    <th>User Type</th>
                                    <th>Joined</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="profile-image"><img src={require("../images/settings-black-icon.png")} className="profile-image-align" alt="start" /></td>
                                    <td>Jess Mo</td>
                                    <td>jessmo76@gmail.com</td>
                                    <td>
                                        <div className="type-dropdown">
                                            <button className="dropdownbtn"><i className="type-arrow type-down"></i></button>
                                            <div className="type-dropdown-content">
                                                <a href="#">Vet</a>
                                                <a href="#">Volunteer</a>
                                            </div>
                                        </div>                                     
                                    </td>
                                    <td>27/04/2023</td>
                                    <td>
                                        <button className="remove-btn">Remove
                                            <img src={require("../images/no-icon.png")} className="remove-btn-align" alt="start" />
                                            <img src={require("../images/no-hover-icon.png")} className="remove-img-top" alt="start" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="profile-image"><img src={require("../images/settings-black-icon.png")} className="profile-image-align" alt="start" /></td>
                                    <td>Matthew Adamas</td>
                                    <td>obleee88@gmail.com</td>
                                    <td>
                                        <div className="type-dropdown">
                                            <button className="dropdownbtn"><i className="type-arrow type-down"></i></button>
                                            <div className="type-dropdown-content">
                                                <a href="#">Vet</a>
                                                <a href="#">Volunteer</a>
                                            </div>
                                        </div> 
                                    </td>
                                    <td>03/04/2023</td>
                                    <td>
                                        <button className="remove-btn">Remove 
                                            <img src={require("../images/no-icon.png")} className="remove-btn-align" alt="start" />
                                            <img src={require("../images/no-hover-icon.png")} className="remove-img-top" alt="start" />
                                        </button>
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