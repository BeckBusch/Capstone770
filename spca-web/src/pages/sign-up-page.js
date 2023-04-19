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
                    {/* <img className="spca-logo" src={require("../images/spca-logo.png")} alt="SPCA Logo" /> */}
                    <h1>Sign Up</h1>
                    <p>An admin will review and approve your sign up request.</p>
                    <p>Completing this sign up form does not automatically create your account.</p>
                    <div class="three-columns-grid">
                        <div>
                            <p className="add-photo-msg"><Link to="/dashboard">Add Photo</Link> </p>
                        </div>
                        <div>
                            <div class="input-label">Name</div>
                            <div class="input-label">Email</div>
                            <div>
                                <label for="Password">Password</label>
                            </div>
                            <div>
                                <label for="ConfirmPassword">Confirm Password</label>
                            </div>
                            <div>
                                <label for="Role">Role</label>
                            </div>
                        </div>
                        <div>
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                                <div class="dropdown">
                                    <button class="dropbtn"><i class="arrow down"></i></button>
                                        <div class="dropdown-content">
                                            <a href="#">Admin</a>
                                            <a href="#">Staff</a>
                                            <a href="#">Volunteer</a>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>

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
    );
}

export default SignUpPage;
