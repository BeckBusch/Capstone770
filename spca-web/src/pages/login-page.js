import React from "react"
import { Link } from "react-router-dom";
import "./login-page.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function LoginPage() {
    return (
        <div className="login-page">
            <div className="align-right">
                <div className="login-container">
                    <img className="spca-logo" src={require("./images/spca-logo.png")} alt="SPCA Logo" />

                    <form>
                        <div>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div>
                            {/* <button type="submit" id="logInBtn" onSubmit={LogIn()}>Log In</button> */}


                            <Link to="/dashboard">
                                <button type="submit" id="logInBtn">Log In</button>
                            </Link>

                        </div>
                    </form>

                    <div>
                        <p> Don"t have an account? <Link to="/sign-in">Sign In</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;