import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";

import "../css/AddUserPage.css";
import NavBar from "../components/NavBar";
import AddUserBlack from "../assets/add-user-black-icon.png";
import MyAccount from "../assets/my-account-icon.png";


function AddUserPage() {
  const { addUser } = useContext(AppContext);

  const [validCredentials, setvalidCredentials] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("none");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const addNewUser = (e) => {
    e.preventDefault();

    checkValidForm();

    if (validCredentials) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Successfully created user: " + userCredential);
          handleAddUser();
          navigate("/manage-users");
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
      setvalidCredentials(true);
    }
  }

  function isValidEmail() {
    return email.includes("@") ? true : false;
  }

  function isValidPassword() {
    return password.length >= 6 ? true : false;
  }

  function confrimPasswordMatchPassword() {
    return password == confirmPassword ? true : false;
  }

  function isRoleSelected() {
    getSelectedRole();
    return role != "none" ? true : false;
  }

  function getSelectedRole() {
    const x = document.getElementById("role");
    setRole(x.options[x.selectedIndex].value);
    // console.log(role)
  }

  async function handleAddUser() {
    addUser(name, email, password, role, image);
    console.log("newUser successfully added to database");
  }

  return (
    <div className="add-user-page">
      <NavBar />

      <div className="add-user-container">
        {/* Add User Heading */}
        <div className="add-user-header">
          <img src={AddUserBlack} className="add-user-icon" alt="add-user" />
          <h1 className="add-user-header">Add User</h1>
        </div>

        {/* Form */}
        <div className="add-user-form">
          {/* Profile Column */}
          <div className="add-user-form-col-1">
            <div className="profile-container">
              <img
                className="profile-img"
                src={MyAccount}
                alt="Profile Image"
              />
            </div>
            <p className="add-photo-msg"></p>
            <div className="add-file-input">
              <input
                type="file"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                id="file-selector"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
          </div>

          {/* Form Content */}
          <div className="add-user-form-col-2">
            <form onSubmit={addNewUser}>
              <div className="add-user-two-columns-grid">
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

              <div className="add-user-error-msg text-align-right">
                <p>{errorMessage}</p>
              </div>

              {/* Buttons */}
              <div className="buttons-div">
                <div className="buttons">
                  <Link to="/manage-users">
                    <button className="cancel-btn">Cancel</button>
                  </Link>
                  <button type="submit" id="signUpBtn" className="add-btn">
                    + Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserPage;
