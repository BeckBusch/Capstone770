import "../css/SignUpConfirmPage.css";
import { Link } from "react-router-dom";
import DashboardLogo from "../assets/dashboard-logo.png";

function SignUpConfirmPage() {
  return (
    <div className="sign-up-page">
      <img className="corner-logo" src={DashboardLogo} alt="SPCA Logo" />

      <div className="sign-up-container-flex">
        <div className="sign-up-container">
          <div className="sign-up-confirm-msg">
            <p>
              Your request has been sent to an admin for approval.
              <br />A confirmation email will be sent once your request has been
              approved.
            </p>
          </div>
          <div className="back-to-home-msg">
            <Link to="/">Back to Home</Link>
          </div>

        </div>
      </div>

      {/* <div className="align-center2">
        <div className="sign-up-confirm-container">
          <p>Your request has been sent to an admin for approval.</p>
          <p>
            A confirmation email will be sent once your request has been
            approved.
          </p>
          <p className="back-to-login-msg">
            <Link to="/">Back to Log In Page</Link>{" "}
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default SignUpConfirmPage;
