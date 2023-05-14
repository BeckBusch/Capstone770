import React from "react"
import { Link } from "react-router-dom";
import NavBar from "../components/nav-bar";
import "./my-account-page.css";

function MyAccountPage() {
    return (
        <div className="my-account-page">
            <NavBar/>
            <div className="my-account-header-container">
                <img src={require("../images/my-account-icon-black.png")} className="my-account-icon-align" alt="my-account" />
                <h1 className="my-account-header">My Account</h1>
            </div>
            <div className="my-account-details-container">
                <div class="my-account-two-columns-grid">
                    <div className="my-account-col-one">
                        <div>
                            <div class="my-account-profile-container">
                                <img className="profile-img" src={require("../images/my-account-icon.png")} alt="Profile Image" />
                            </div>
                            <p className="edit-photo-msg"><Link to="/dashboard">Edit</Link> </p>
                        </div>
                    </div>
                    <div className="my-account-col-two">
                        <div class="edit-container">
                            <form>
                                <div className="user-details-grid">
                                    <div><label for="Name">Name</label></div>
                                    <div>
                                        <p>Name</p>
                                        {/* <input type="text" id="name" placeholder="Name" /> */}
                                    </div>
                                    <div className="edit-align-right"><p><Link to="/dashboard">Edit</Link> </p></div>

                                    <div><label for="ID">ID</label></div>
                                    <div>
                                        <p>ID</p>
                                        {/* <input type="text" id="id" placeholder="Id" /> */}
                                    </div>
                                    <div></div>

                                    <div><label for="Email">Email</label></div>
                                    <div>
                                        <p>Email</p>
                                        {/* <input type="text" id="email" placeholder="Email" /> */}
                                    </div>
                                    <div className="edit-align-right"><p><Link to="/dashboard">Edit</Link> </p></div>

                                    <div><label for="Password">Password</label></div>
                                    <div>
                                        <p>Password</p>
                                        {/* <input type="password" id="password" placeholder="Password" /> */}
                                    </div>
                                    <div className="edit-align-right"><p><Link to="/dashboard">Edit</Link> </p></div>

                                    <div><label for="Role">Role</label></div>
                                    <div>
                                        <p>Role</p>
                                        {/* <input type="role" id="role" placeholder="Role" /> */}
                                    </div>
                                    <div></div>

                                    <div><label for="Joined">Joined</label></div>
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