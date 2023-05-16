import "../css/SignUpPage.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

import DashboardLogo from "../assets/dashboard-logo.png";
import MyAccountBlack from "../assets/my-account-icon-black.png";
import MyAccount from "../assets/my-account-icon.png";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignUpPage() {

  const { addUser } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Successfully created user: " + userCredential)
      handleAddUser();
    })
    .catch((error) => {
      console.log("Error: " + error)
    });
  }


  async function handleAddUser() {
    var name = document.getElementById("name").value;
    // console.log("name = ", name);
    var email = document.getElementById("email").value;
    // console.log("email = ", email);
    var password = document.getElementById("password").value;
    // console.log("password = ", password);
    var confirmPassword = document.getElementById("confirmPassword").value;
    // console.log("confirmPassword = ", confirmPassword);
    var role = document.getElementById("role").value;
    // console.log("role = ", role);
    addUser(name, email, password, role, "");
    console.log("newUser");
  }

  // function confirmPassword() {
  //   var password = document.getElementById("password").value;
  //   var confirmPassword = document.getElementById("confirmPassword").value;
  //   if (password != confirmPassword) {

  //   }
  // }

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
              <label className="input-label" htmlFor="inputTag">
                <input
                  className="add-file-input"
                  type="file"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  id="file-selector"
                ></input>
              </label>
            </div>

            {/* Form Contend */}
            <div className="sign-up-form-col-2">
              <form onSubmit={signUp}>
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
                      // onChange={(e) => handleNameChange(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                  <div>
                    <select
                      className="select-style"
                      name="role-types"
                      id="role"
                      defaultValue={"none"}
                    >
                      <option value="none" disabled hidden>
                        Select an Option
                      </option>
                      <option value="Admin">Admin</option>
                      <option value="Staff">Staff</option>
                      <option value="Volunteer">Volunteer</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  id="signUpBtn"
                  className="sign-up-btn"/>

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
              {/* <Link to="/sign-up/confirm"> */}
                <button
                  type="submit"
                  id="signUpBtn"
                  className="sign-up-btn"
                  // onClick={() => {
                    // confirmPassword();
                  //   handleAddUser();
                  // }}
                >
                  Sign Up
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
