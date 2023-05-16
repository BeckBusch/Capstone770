import "../css/SignUpPage.css";

import { Link } from "react-router-dom";

import DashboardLogo from "../assets/dashboard-logo.png";
import MyAccountBlack from "../assets/my-account-icon-black.png";
import MyAccount from "../assets/my-account-icon.png";

function SignUpPage() {
  return (
    <div className="sign-up-page">
      {/* Corner Logo */}
      <img className="corner-logo" src={DashboardLogo} alt="SPCA Logo" />

      {/* Sign Up Container*/}
      <div className="sign-up-container-flex">
        <div className="sign-up-container">
          {/* Sign Up Headind */}
          <div className="sign-up-header">
            <img src={MyAccountBlack} className="sign-up-icon" alt="sign-up" />
            <h1 className="sign-up-header">Sign Up</h1>
          </div>

          {/* Sign Up Information */}
          <div className="sign-up-info">
            <p>An admin will review and approve your sign up request.</p>
            <p>
              Completing this sign up form does not automatically create your
              account.
            </p>
          </div>

          {/* Sign Up Form */}
          <div className="sign-up-form">
            {/* Profile Column */}
            <div className="sign-up-form-col-1">
              <div className="profile-container">
                <img
                  className="profile-img"
                  src={MyAccount}
                  alt="Profile Image"
                />
              </div>
              <p className="add-photo-msg">
                <Link to="/dashboard"> + Add Photo </Link>
              </p>
            </div>

            {/* Form Contend */}
            <div className="sign-up-form-col-2">
              <form>
                <div className="sign-up-two-columns-grid">
                  <div>
                    <label htmlFor="Name">Name</label>
                  </div>
                  <div>
                    <input
                      className="input-styling"
                      type="text"
                      id="name"
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="Email">Email</label>
                  </div>
                  <div>
                    <input
                      className="input-styling"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div>
                    <input
                      className="input-styling"
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                  </div>
                  <div>
                    <input
                      className="input-styling"
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div>
                    <label htmlFor="Role">Role</label>
                  </div>
                  <div className="role-dropdown">
                    <button className="role-dropbtn">
                      <i className="role-arrow down"></i>
                    </button>
                    <div className="role-dropdown-content">
                      <a href="#">Admin</a>
                      <a href="#">Staff</a>
                      <a href="#">Volunteer</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-container">
            <div className="buttons">
              <Link to="/">
                <button type="submit" id="cancelBtn" className="cancel-btn">
                  Cancel
                </button>
              </Link>
              <Link to="/sign-up/confirm">
                <button type="submit" id="signUpBtn" className="sign-up-btn">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
