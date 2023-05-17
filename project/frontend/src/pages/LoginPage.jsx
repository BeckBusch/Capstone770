import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";

import "../css/LoginPage.css";
import SPCALogo from "../assets/spca-logo.png";
import BackgroundImage from "../assets/login-image.png";

function LoginPage() {
  const { users, loggedIn, setLoggedIn, userName, setUserName, userID, setUserID, userEmail, setUserEmail, 
    userPassword, setUserPassword, userRole, setUserRole, userJoined, setUserJoined, userImage, setUserImage } = useContext(AppContext);

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
        setLoggedIn(true);
        getRole();
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
    return email.length == 0 || !email.includes("@") ? true : false;
  }

  function isPasswordEmpty() {
    return password.length == 0 ? true : false;
  }

  function getRole() {

    for (let user of users) {
      console.log(user["email"])
      if (user["email"] == email) {
        setUserName(user["name"])
        setUserID(user["_id"])
        setUserEmail(user["email"])
        setUserPassword(user["password"])
        setUserRole(user["role"])
        setUserJoined(user["createdAt"])
        setUserImage(user["image"])
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
            <p> {errorMessage} </p>
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
