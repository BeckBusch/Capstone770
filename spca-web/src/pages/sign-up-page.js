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
                    <div className="sign-two-columns-grid">
                        <div className="sign-up-col-1">
                            <div className="profile-container">
                                <img className="profile-img" src={require("../images/my-account-icon.png")} alt="Profile Image" />
                            </div>
                            <p className="add-photo-msg"><Link to="/dashboard">+ Add Photo</Link> </p>
                        </div>
                        <div className="sign-up-col-2">
                            <form>
                            <div className="sign-up-two-columns-grid">
                                <div><label htmlFor="Name">Name</label></div>
                                <div><input className="input-styling" type="text" id="name" placeholder="Name" /></div>

                                <div><label htmlFor="Email">Email</label></div>
                                <div><input className="input-styling" type="text" id="email" placeholder="Email" /></div>

                                <div><label htmlFor="Password">Password</label></div>
                                <div><input className="input-styling" type="password" id="password" placeholder="Password" /></div>

                                <div><label htmlFor="ConfirmPassword">Confirm Password</label></div>
                                <div><input className="input-styling" type="password" id="confirmPassword" placeholder="Confirm Password" /></div>

                                <div><label htmlFor="Role">Role</label></div>
                                <div className="role-dropdown">
                                    <button className="role-dropbtn"><i className="role-arrow down"></i></button>
                                    <div className="role-dropdown-content">
                                        <a href="#">Admin</a>
                                        <a href="#">Staff</a>
                                        <a href="#">Volunteer</a>
                                    </div>
                                </div> 
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="buttons">
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
