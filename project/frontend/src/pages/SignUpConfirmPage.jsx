import "../css/SignUpConfirmPage.css";
import { Link } from "react-router-dom";
import DashboardLogo from "../assets/dashboard-logo.png";

function SignUpConfirmPage() {
  return (
    <div className="sign-up-page">
      {/* Corner Logo */}
      <img className="corner-logo" src={DashboardLogo} alt="SPCA Logo" />

      {/* Confirmation Container */}
      <div className="sign-up-container-flex">
        <div className="sign-up-container">

          {/* Confirmation Message */}
          <div className="sign-up-confirm-msg">
            <p>
              Your request has been sent to an admin for approval.
              <br />A confirmation email will be sent once your request has been
              approved.
            </p>
          </div>
          {/* Back to Home Link */}
          <div className="back-to-home-msg">
            <Link to="/">Back to Home</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUpConfirmPage;
