import "../css/AddUserPage.css";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBarAdmin from "../components/nav-bar-admin";
import MyAccountIcon from "../assets/my-account-icon.png";
import AddUserBlackIcon from "../assets/add-user-black-icon.png";


function AddUserPage() {  
    return (
      <div className="add-user-page">
            <NavBarAdmin/>   
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
                            <div className="details-spacing">
                                <label htmlFor="Name">Name</label>
                                <input className="input-style" type="text" id="name" placeholder="Name" />
                                {/* <p className="edit-details-msg"><Link to="/dashboard">Edit</Link> </p> */}
                            </div>

                            <div className="details-spacing"> 
                                <label htmlFor="Email">Email</label>
                                <input className="input-style" type="text" id="email" placeholder="Email" />
                            </div>

                            <div className="details-spacing">
                                <label htmlFor="Password">Password</label>
                                <input className="input-style" type="password" id="password" placeholder="Password" />
                            </div>

                            <div className="details-spacing">
                                <label htmlFor="ConfirmPassword">Confirm Password</label>
                                <input className="input-style" type="password" id="confirm-password" placeholder="Confirm Password" />
                            </div>

                            <div className="details-spacing">
                                <label htmlFor="Role">Role</label>
                                <input className="input-style" type="role" id="role" placeholder="Role" />
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
                                <button type="submit" id="saveBtn" className="save-btn">Save</button>
                            </Link>
                        </div>
                </div>
            </div>       
        </div>
    )
  }
  
  export default AddUserPage
  