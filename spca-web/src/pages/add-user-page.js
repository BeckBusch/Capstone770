import React from "react"
import { Link } from "react-router-dom";
import NavBarAdmin from "../components/nav-bar-admin";
import "./add-user-page.css";

function AddUserPage() {
    return (
        <div className="add-user-page">
            <NavBarAdmin/>   
            <div className="add-user-header-container">
                <img src={require("../images/add-user-black-icon.png")} className="add-user-icon-align" alt="start" />
                <h1 className="add-user-header">Add User</h1>
            </div> 
            <div className="add-user-details-container">
                <div class="two-columns">
                    <div className="two-columns-col-1">
                        <div>
                            <div class="p-container">
                                <img className="profile-img" src={require("../images/my-account-icon.png")} alt="Profile Image" />
                            </div>
                            <p className="add-photo-msg"><Link to="/dashboard">+ Add Photo</Link> </p>
                        </div>
                    </div>
                    <div class="two-columns-col-2">
                        <form>
                            <div class="details-spacing">
                                <label for="Name">Name</label>
                                <input className="input-style" type="text" id="name" placeholder="Name" />
                                {/* <p className="edit-details-msg"><Link to="/dashboard">Edit</Link> </p> */}
                            </div>

                            <div class="details-spacing"> 
                                <label for="Email">Email</label>
                                <input className="input-style" type="text" id="email" placeholder="Email" />
                            </div>

                            <div class="details-spacing">
                                <label for="Password">Password</label>
                                <input className="input-style" type="password" id="password" placeholder="Password" />
                            </div>

                            <div class="details-spacing">
                                <label for="ConfirmPassword">Confirm Password</label>
                                <input className="input-style" type="password" id="confirm-password" placeholder="Confirm Password" />
                            </div>

                            <div class="details-spacing">
                                <label for="Role">Role</label>
                                <input className="input-style" type="role" id="role" placeholder="Role" />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="button-container">
                        <div class="buttons">
                            <Link to="/manage-users">
                                <button type="submit" id="cancelBtn" className="cancel-btn">Cancel</button>
                            </Link>
                            <Link to="/manage-users">
                                <button type="submit" id="saveBtn" className="save-btn">Save</button>
                            </Link>
                        </div>
                </div>
            </div>       
        </div>
    )
}

export default AddUserPage;