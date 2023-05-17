import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";

import "../css/SignUpPage.css";
import DashboardLogo from "../assets/dashboard-logo.png";
import MyAccountBlack from "../assets/my-account-icon-black.png";
import MyAccount from "../assets/my-account-icon.png";

function SignUpPage() {
  const { addUser } = useContext(AppContext);

  const [validSignUp, setValidSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("none");
  const [image, setImage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();

    checkValidForm();

    if (validSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Successfully created user: " + userCredential);
          handleAddUser();
          navigate("/sign-up/confirm");
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    }
  };

  function checkValidForm() {
    if (!isValidEmail()) {
      setErrorMessage("Provided email is invalid.");
    } else if (!isValidPassword()) {
      setErrorMessage("Password must be at least 6 characters long.");
    } else if (!confrimPasswordMatchPassword()) {
      setErrorMessage("Passwords do not match.");
    } else if (!isRoleSelected()) {
      setErrorMessage("Please select a role.");
    } else {
      setValidSignUp(true);
    }
  }

  function isValidEmail() {
    return (email.includes("@")) ? true : false
  }

  function isValidPassword() {
    return (password.length >= 6) ? true : false
  }

  function confrimPasswordMatchPassword() {
    return (password == confirmPassword) ? true : false
  }

  function isRoleSelected() {
    getSelectedRole();
    return (role != "none") ? true : false
  }

  function getSelectedRole() {
    var x = document.getElementById("role");
    setRole(x.options[x.selectedIndex].value);
    // console.log(role)
  }

  async function handleAddUser() {
    addUser(name, email, password, role, image);
    console.log("newUser successfully added to database");
  }

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
                {/* <Link to="/dashboard"> + Add Photo </Link> */}
              </p>
              <div className="add-file-input">
              <input
                  type="file"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  id="file-selector"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
            ></input>
                </div>
              {/* <label className="input-label" htmlFor="inputTag">
                <input
                  className="add-file-input"
                  type="file"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  id="file-selector"
                ></input>
              </label> */}
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                      defaultValue={role}
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

                <div className="sign-up-error-msg text-align-right">
                  <p>{errorMessage}</p>
                </div>

                {/* Buttons */}
                <div className="buttons-div">
                  <div className="buttons">
                    <Link to="/">
                      <button
                        type="submit"
                        id="cancelBtn"
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                    </Link>
                    <button
                      type="submit"
                      id="signUpBtn"
                      className="sign-up-btn"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
