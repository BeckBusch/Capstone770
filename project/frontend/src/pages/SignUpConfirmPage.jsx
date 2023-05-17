import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/SignUpConfirmPage.css";
import DashboardLogo from "../assets/dashboard-logo.png";

function SignUpConfirmPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5500);
  }, []);

  const [counter, setCounter] = useState(5);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

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
            <p>Redirecting back to Home Page in {counter}</p>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpConfirmPage;
