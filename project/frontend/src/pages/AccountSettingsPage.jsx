import "../css/AccountSettingsPage.css";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/nav-bar";
import MyAccountBlackIcon from "../assets/my-account-icon-black.png";
import MyAccountIcon from "../assets/my-account-icon.png";


function AccountSettingsPage() {  
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
                                      <p>Name</p>
                                      {/* <input type="text" id="name" placeholder="Name" /> */}
                                  </div>
                                  <div className="edit-align-right"><p><Link to="/dashboard">Edit</Link> </p></div>

                                  <div><label htmlFor="ID">ID</label></div>
                                  <div>
                                      <p>ID</p>
                                      {/* <input type="text" id="id" placeholder="Id" /> */}
                                  </div>
                                  <div></div>

                                  <div><label htmlFor="Email">Email</label></div>
                                  <div>
                                      <p>Email</p>
                                      {/* <input type="text" id="email" placeholder="Email" /> */}
                                  </div>
                                  <div className="edit-align-right"><p><Link to="/dashboard">Edit</Link> </p></div>

                                  <div><label htmlFor="Password">Password</label></div>
                                  <div>
                                      <p>Password</p>
                                      {/* <input type="password" id="password" placeholder="Password" /> */}
                                  </div>
                                  <div className="edit-align-right"><p><Link to="/dashboard">Edit</Link> </p></div>

                                  <div><label htmlFor="Role">Role</label></div>
                                  <div>
                                      <p>Role</p>
                                      {/* <input type="role" id="role" placeholder="Role" /> */}
                                  </div>
                                  <div></div>

                                  <div><label htmlFor="Joined">Joined</label></div>
                                  <div>
                                      <p>Joined</p>
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
  