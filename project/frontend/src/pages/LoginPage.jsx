import "../css/LoginPage.css";
import { Link } from "react-router-dom";
import SPCALogo from "../assets/spca-logo.png"
import BackgroundImage from "../assets/login-image.png"

function LoginPage() {
  return (
    <div className="login-page">


      <div className="align-right">

        <div className="login-container">
          <img className="spca-logo" src={SPCALogo} alt="SPCA Logo" />
          <form>
            <div>
              <input type="text" placeholder="Username" className="login-input" />
            </div>
            <div>
              <input type="password" placeholder="Password" className="login-input" />
            </div>
            <div>
              <Link to="/dashboard">
                <button type="submit" id="logInBtn" className="login-btn">Log In</button>
              </Link>
            </div>
          </form>
          <p className="sign-up-msg"> Don't have an account? <Link to="/sign-up">Sign Up</Link> </p>
        </div>

      </div>
      
      <img className="background-image" src={BackgroundImage} alt="SPCA Logo" />

    </div>
  )
}

export default LoginPage
