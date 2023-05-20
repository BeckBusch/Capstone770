import "../css/LoginPage.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";

import SPCALogo from "../assets/logo-spca.png";
import BackgroundImage from "../assets/background-login.png";

function LoginPage() {
  const { setLoggedIn } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setErrorMessage("")
          setLoggedIn(true);
          console.log(
            "Successfully logged in user: " + userCredential["user"]["email"]
          );
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage("Error loggin in. Please try again.");
        });
  };

  return (
    <div className="login-page">
      {/* Background Image */}
      <img className="background-image" src={BackgroundImage} alt="SPCA Logo" />
      {/* Login Container */}
      <div className="login-container-flex">
        <div className="login-container">
          {/* SPCA Logo */}
          <img className="spca-logo" src={SPCALogo} alt="SPCA Logo" />
          <form onSubmit={handleSubmit}>
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
