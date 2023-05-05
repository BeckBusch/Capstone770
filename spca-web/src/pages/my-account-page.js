import React from "react"
import { Link } from "react-router-dom";
import NavBar from "../components/nav-bar";
import "./my-account-page.css";

function MyAccountPage() {
    return (
        <div className="my-account-page">
            <NavBar/>
            <div className="header-container">
                <img src={require("../images/my-account-icon-black.png")} alt="my-account" />
                <h1>My Account</h1>
            </div>
            <div className="details-container">
                <div class="two-columns-grid">
                    <div>
                        <div class="profile-container">
                            <img className="profile-img" src={require("../images/my-account-icon.png")} alt="Profile Image" />
                        </div>
                        <p className="edit-photo-msg"><Link to="/dashboard">Edit</Link> </p>
                    </div>
                    <div>
                        <div class="edit-container">
                            <form>
                                <div class="details-spacing">
                                    <label for="Name">Name</label>
                                    <input type="text" id="name" placeholder="Name" />
                                    {/* <p className="edit-details-msg"><Link to="/dashboard">Edit</Link> </p> */}
                                </div>

                                <div class="details-spacing"> 
                                    <label for="ID">ID</label>
                                    <input type="text" id="id" placeholder="Id" />
                                </div>

                                <div class="details-spacing">
                                    <label for="Email">Email</label>
                                    <input type="text" id="email" placeholder="Email" />
                                    {/* <p className="edit-details-msg"><Link to="/dashboard">Edit</Link> </p> */}
                                </div>

                                <div class="details-spacing">
                                    <label for="Password">Password</label>
                                    <input type="password" id="password" placeholder="Password" />
                                    {/* <p className="edit-details-msg"><Link to="/dashboard">Edit</Link> </p> */}
                                </div>

                                <div class="details-spacing">
                                    <label for="Role">Role</label>
                                    <input type="role" id="role" placeholder="Role" />
                                </div>

                                <div class="details-spacing">
                                    <label for="Joined">Joined</label>
                                    <input type="joined" id="joined" placeholder="Joined" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="button-container">
                        <div class="buttons">
                            <Link to="/">
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

export default MyAccountPage;