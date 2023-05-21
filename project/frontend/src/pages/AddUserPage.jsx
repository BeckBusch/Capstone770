import "../css/AddUserPage.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";

function AddUserPage() {
  const { addUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("none");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Successfully created user: " + userCredential);
          addUser(name, email, password, role, image);
          navigate("/manage-users");
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    }
  };

  async function handleRoleSelect() {
    const roleSelect = document.getElementById("role");
    const roleValue = roleSelect.value;
    setRole(roleValue);
  }

  function isValidForm() {
    if (!email.includes("@")) {
      setErrorMessage("Provided email is invalid.");
      return false;
    } else if (password.trim().length == 0) {
      setErrorMessage("Password must be at least 6 characters long.");
      return false;
    } else if (password != confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return false;
    } else if (role == "none") {
      setErrorMessage("Please select a role.");
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="add-user-page">
      <NavBar />

      <div className="add-user-container">
        {/* Add user Heading */}
        <div className="add-user-header">
          <h1 className="add-user-header-line-1">Add</h1>
          <h1 className="add-user-header-line-2">User</h1>
        </div>

        {/* Form */}
        <div className="add-user-form-div">

        <div className="add-user-form">

          <form onSubmit={handleAddUser}>
            <div className="add-user-two-columns-grid">
              {/* Name */}
              <label htmlFor="Name">Name</label>
              <input
                className="user-input-styling"
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* Email */}
              <label htmlFor="Email">Email</label>
              <input
                className="user-input-styling"
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Password */}
              <label htmlFor="Password">Password</label>
              <input
                className="user-input-styling"
                type="text"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Confirm Password */}
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input
                className="user-input-styling"
                type="text"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {/* Role */}
              <label htmlFor="Role">Role</label>
              <div className="user-select-styling">
                <select
                  className="user-select"
                  name="role-types"
                  id="role"
                  defaultValue="none"
                  onChange={() => handleRoleSelect()}
                >
                  <option value="none" disabled hidden>
                    Select an Option
                  </option>
                  <option value="Vet">Vet</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              {/* Image */}
              <label htmlFor="Image">Image</label>
              <div className="user-image-input">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  id="file-selector"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </div>
            </div>
            {/* Error Message */}
            <div className="add-user-error-msg text-align-right">
              <p>{errorMessage}</p>
            </div>
            {/* Buttons */}
            <div className="add-user-buttons-div">
              <div className="add-user-buttons">
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
