import "../css/LoginPage.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import SPCALogo from "../assets/spca-logo.png";
import BackgroundImage from "../assets/login-image.png";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Successfully logged in user: " + userCredential)
    })
    .catch((error) => {
      console.log("Error: " + error)
    });
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
              {/* <Link to="/dashboard"> */}
                <button type="submit" id="logInBtn" className="login-btn">
                  Log In
                </button>
              {/* </Link> */}
            </div>
          </form>
          <p className="sign-up-msg">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
