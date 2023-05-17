import "../css/AccountSettingsPage.css";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import MyAccountBlackIcon from "../assets/my-account-icon-black.png";
import MyAccountIcon from "../assets/my-account-icon.png";


function AccountSettingsPage() {  
    const {userName, setUserName, userID, setUserID, userEmail, setUserEmail, 
        userPassword, setUserPassword, userRole, setUserRole, userJoined, setUserJoined} = useContext(AppContext);

        console.log("userrole = "  + userRole);
        console.log("userEmail "  + userEmail);
        console.log("userpassword length = ", userPassword.length)

        var password = "";
        for (let i = 0; i < userPassword.length; i++) {
            password = password + "*";
        }
        console.log("password = ", password);

    return (
      <div className="my-account-page">
          <NavBar/>
          <div className="my-account-header-container">
              <img src={MyAccountBlackIcon} className="my-account-icon-align" alt="my-account" />
              <h1 className="my-account-header">My Account</h1>
          </div>
          <div className="my-account-details-container">
              <div className="my-account-two-columns-grid">
                  <div className="my-account-col-one">
                      <div>
                          <div className="my-account-profile-container">
                              <img className="profile-img" src={MyAccountIcon} alt="Profile Image" />
                          </div>
                          <p className="edit-photo-msg"><Link to="/dashboard">Edit</Link> </p>
                      </div>
                  </div>
                  <div className="my-account-col-two">
                      <div className="edit-container">
                          <form>
                              <div className="user-details-grid">
                                  <div><label htmlFor="Name">Name</label></div>
                                  <div>
                                      <p id="name-text">{userName}</p>
                                      {/* <input type="text" id="name" placeholder="Name" /> */}
                                  </div>
                                  <div className="edit-align-right">
                                    {/* <p><Link to="/dashboard">Edit</Link> </p> */}
                                    <button className="edit-button">edit</button>
                                    </div>

                                  <div><label htmlFor="ID">ID</label></div>
                                  <div>
                                      <p>{userID}</p>
                                      {/* <input type="text" id="id" placeholder="Id" /> */}
                                  </div>
                                  <div></div>

                                  <div><label htmlFor="Email">Email</label></div>
                                  <div>
                                      <p>{userEmail}</p>
                                      {/* <input type="text" id="email" placeholder="Email" /> */}
                                  </div>
                                  <div className="edit-align-right"><p><Link to="/dashboard">Edit</Link> </p></div>

                                  <div><label htmlFor="Password">Password</label></div>
                                  <div>
                                      <p>{password}</p>
                                      {/* <input type="password" id="password" placeholder="Password" /> */}
                                  </div>
                                  <div className="edit-align-right"><p><Link to="/dashboard">Edit</Link> </p></div>

                                  <div><label htmlFor="Role">Role</label></div>
                                  <div>
                                      <p>{userRole}</p>
                                      {/* <input type="role" id="role" placeholder="Role" /> */}
                                  </div>
                                  <div></div>

                                  <div><label htmlFor="Joined">Joined</label></div>
                                  <div>
                                      <p>{userJoined}</p>
                                      {/* <input type="joined" id="joined" placeholder="Joined" /> */}
                                  </div>
                                  <div></div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="button-container">
                      <div className="buttons">
                          <Link to="/account-settings/:id">
                              <button type="submit" id="cancelBtn" className="cancel-btn">Cancel</button>
                          </Link>
                          <Link to="/">
                              <button type="submit" id="saveBtn" className="save-btn">Save</button>
                          </Link>
                      </div>
              </div>
          </div>
        </div>
    )
  }
  
  export default AccountSettingsPage
  