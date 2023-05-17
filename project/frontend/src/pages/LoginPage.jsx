import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "../css/LoginPage.css";
import SPCALogo from "../assets/spca-logo.png";
import BackgroundImage from "../assets/login-image.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyCredentials, setEmptyCredentials] = useState(true);
  const [errorMessage, setErrorMessage] = useState(" ");

  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();

    checkNonEmptyCredentials();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Successfully logged in user: " + userCredential);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  function checkNonEmptyCredentials() {
    if (isEmailEmpty()) {
      setErrorMessage("Please provide a valid email.");
    } else if (isPasswordEmpty()) {
      setErrorMessage("Please provide a valid password.");
    } else {
      setEmptyCredentials(false);
    }
  }

  function isEmailEmpty() {
    return (email.length == 0 || !email.includes("@")) ? true : false
  }

  function isPasswordEmpty() {
    return (password.length == 0) ? true : false
  }


  return (
    <div className="login-page">
      {/* Background Image */}
      <img className="background-image" src={BackgroundImage} alt="SPCA Logo" />

      {/* Login Container */}
      <div className="login-container-flex">
        <div className="login-container">
          <img className="spca-logo" src={SPCALogo} alt="SPCA Logo" />
          <form onSubmit={logIn}>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" id="logInBtn" className="login-btn">
                Log In
              </button>
            </div>
          </form>

          <div className="login-error-msg">
            <p>  {errorMessage} </p>
          </div>

          <p className="sign-up-msg">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
