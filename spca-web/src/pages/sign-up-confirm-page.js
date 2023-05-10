import React from "react";
import { Link } from "react-router-dom";
import "./sign-up-confirm-page.css";

function SignUpConfirmPage() {
    return (
        <div className="sign-up-confirm-page">
            <div className="nav-bar">
                <div className="col col-left">
                    <img className="navbar-logo" src={require("../images/dashboard-logo.png")} alt="SPCA Logo" />
                    {/* <Link to="/sign-in">Sign In</Link> */}
                </div>
            </div>    
            <div className="align-center2">
                <div className="sign-up-confirm-container">
                    <p>Your request has been sent to an admin for approval.</p>
                    <p>A confirmation email will be sent once your request has been approved.</p>
                    <p className="back-to-login-msg"><Link to="/">Back to Log In Page</Link> </p>
                </div>
            </div>
        </div>
    );
}

export default SignUpConfirmPage;
