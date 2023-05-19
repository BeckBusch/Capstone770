import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../AppContextProvider";
import "../css/AddChatPanel.css";

function AddChatPanel() {
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

  const handleAddUser = (e) => {
    e.preventDefault();
    getSelectedRole();
    checkValidForm();

    if (validCredentials) {
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
    return role != "none" ? true : false;
  }

  function getSelectedRole() {
    const x = document.getElementById("role");
    setRole(x.options[x.selectedIndex].value);
    // console.log(role)
  }

  return (
    <div className="add-chat-page">
      <div className="add-chat-page-content">
        <h1 className="add-chat-header ">New Discussion</h1>

        {/* Form */}
        <form onSubmit={handleAddUser}>
          <div className="summary-div">
            <label htmlFor="ChatTitle">Summary</label>
            <input
              className="chat-input-styling"
              type="text"
              id="name"
              placeholder="Please provide a short summary of the discussion ..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label htmlFor="Password">Discussion</label>
          <textarea
            className="paragraph"
            placeholder="Start discussion about ..."
            name="Text1"
          />

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
  );
}

export default AddChatPanel;
