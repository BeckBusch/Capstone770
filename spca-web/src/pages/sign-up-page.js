import React from "react";
import { Link } from "react-router-dom";
import "./sign-up-page.css";

function SignUpPage() {
    return (
        <div className="sign-up-page">
            <div className="nav-bar">
                <div className="col col-left">
                    <img className="navbar-logo" src={require("../images/dashboard-logo.png")} alt="SPCA Logo" />
                    {/* <Link to="/sign-in">Sign In</Link> */}
                </div>
            </div>    
            <div className="align-center">
                <div className="sign-up-container">
                    <div className="sign-up-header-container">
                        <img src={require("../images/my-account-icon-black.png")} className="sign-up-icon" alt="sign-up" />
                        <h1 className="sign-up-header">Sign Up</h1>
                    </div>
                    <p>An admin will review and approve your sign up request.</p>
                    <p>Completing this sign up form does not automatically create your account.</p>
                    <div class="sign-two-columns-grid">
                        <div class="sign-up-col-1">
                            <div class="profile-container">
                                <img className="profile-img" src={require("../images/my-account-icon.png")} alt="Profile Image" />
                            </div>
                            <p className="add-photo-msg"><Link to="/dashboard">+ Add Photo</Link> </p>
                        </div>
                        <div class="sign-up-col-2">
                            <form>
                            <div class="sign-up-two-columns-grid">
                                <div><label for="Name">Name</label></div>
                                <div><input class="input-styling" type="text" id="name" placeholder="Name" /></div>

                                <div><label for="Email">Email</label></div>
                                <div><input class="input-styling" type="text" id="email" placeholder="Email" /></div>

                                <div><label for="Password">Password</label></div>
                                <div><input class="input-styling" type="password" id="password" placeholder="Password" /></div>

                                <div><label for="ConfirmPassword">Confirm Password</label></div>
                                <div><input class="input-styling" type="password" id="confirmPassword" placeholder="Confirm Password" /></div>

                                <div><label for="Role">Role</label></div>
                                <div class="role-dropdown">
                                    <button class="role-dropbtn"><i class="role-arrow down"></i></button>
                                    <div class="role-dropdown-content">
                                        <a href="#">Admin</a>
                                        <a href="#">Staff</a>
                                        <a href="#">Volunteer</a>
                                    </div>
                                </div> 
                            </div>
                            </form>
                        </div>
                    </div>
                    <div class="button-container">
                        <div class="buttons">
                            <Link to="/">
                                <button type="submit" id="cancelBtn" className="cancel-btn">Cancel</button>
                            </Link>
                            <Link to="/sign-up-confirm">
                                <button type="submit" id="signUpBtn" className="sign-up-btn">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;