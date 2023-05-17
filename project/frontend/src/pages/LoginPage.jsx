import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";

import "../css/LoginPage.css";
import SPCALogo from "../assets/spca-logo.png";
import BackgroundImage from "../assets/login-image.png";

function LoginPage() {
  const { users, setLoggedIn, setUserRole, setUserName} = useContext(AppContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");

  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Successfully logged in user: " + userCredential);
        setLoggedIn(true);
        getRole();
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Error: " + error);
        setErrorMessage(error.message);
      });
  };

  function getRole() {
    for (let user of users) {
      if (user["email"] == email) {
        setUserRole(user["role"]);
        setUserName(user["name"]);
      }
    }
  }

  return (
    <div className="login-page">
      {/* Background Image */}
      <img className="background-image" src={BackgroundImage} alt="SPCA Logo" />

      {/* Login Container */}
      <div className="login-container-flex">
        <div className="login-container">
          {/* SPCA Logo */}
          <img className="spca-logo" src={SPCALogo} alt="SPCA Logo" />
          <form onSubmit={logIn}>
            {/* Email */}
            <div>
              <input
                type="text"
                placeholder="Email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Error Message */}
            <div className="login-error-msg">
              <p> {errorMessage} </p>
            </div>
            {/* Submit Button */}
            <div>
              <button type="submit" id="logInBtn" className="login-btn">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
