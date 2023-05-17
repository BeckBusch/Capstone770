import "../css/AddUserPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import MyAccountIcon from "../assets/my-account-icon.png";
import AddUserBlackIcon from "../assets/add-user-black-icon.png";


function AddUserPage() {  
    const {
        addUser
    } = useContext(AppContext);

    async function handleAddUser() {
    var name = document.getElementById("name").value;
    console.log("name = ", name);
    var email = document.getElementById("email").value;
    console.log("email = ", email);
    var password = document.getElementById("password").value;
    console.log("password = ", password);
    var confirmPassword = document.getElementById("confirmPassword").value;
    console.log("confirmPassword = ", confirmPassword);
    var role = document.getElementById("role").value;
    console.log("role = ", role);   

    addUser(name, email, password, role, "");
    console.log("newUser");
  }

    return (
      <div className="add-user-page">
            <NavBar/>   
            <div className="add-user-header-container">
                <img src={AddUserBlackIcon} className="add-user-icon-align" alt="start" />
                <h1 className="add-user-header">Add User</h1>
            </div> 
            <div className="add-user-details-container">
                <div className="two-columns">
                    <div className="two-columns-col-1">
                        <div>
                            <div className="p-container">
                                <img className="profile-img" src={MyAccountIcon} alt="Profile Image" />
                            </div>
                            <p className="add-photo-msg"><Link to="/dashboard">+ Add Photo</Link> </p>
                        </div>
                    </div>
                    <div className="two-columns-col-2">
                        <form>
                            <div className="sign-up-two-columns-grid">
                                <div>
                                    <label htmlFor="Name">Name</label>
                                </div>
                                <div>
                                    <input className="input-style" type="text" id="name" placeholder="Name" />
                                    {/* <p className="edit-details-msg"><Link to="/dashboard">Edit</Link> </p> */}
                                </div>

                                <div> 
                                    <label htmlFor="Email">Email</label>
                                </div>
                                <div>
                                    <input className="input-style" type="text" id="email" placeholder="Email" />
                                </div>

                                <div>
                                    <label htmlFor="Password">Password</label>
                                </div>
                                <div>
                                    <input className="input-style" type="password" id="password" placeholder="Password" />
                                </div>

                                <div>
                                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                                </div>
                                <div>
                                    <input className="input-style" type="password" id="confirmPassword" placeholder="Confirm Password" />
                                </div>

                                <div>
                                    <label htmlFor="Role">Role</label>
                                </div>
                                <div>
                                    <select className="select-role-style" name="role-types" id="role" defaultValue={"none"}>
                                        <option value="none" disabled hidden>Select an Option</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Staff">Staff</option>
                                        <option value="Volunteer">Volunteer</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="button-container">
                        <div className="buttons">
                            <Link to="/manage-users">
                                <button type="submit" id="cancelBtn" className="cancel-btn">Cancel</button>
                            </Link>
                            <Link to="/manage-users">
                                <button 
                                type="submit" 
                                id="saveBtn" 
                                className="save-btn"
                                onClick={() => {
                                    handleAddUser();
                                }}
                                >Save</button>
                            </Link>
                        </div>
                </div>
            </div>       
        </div>
    )
  }
  
  export default AddUserPage
  