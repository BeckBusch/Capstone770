import React from "react"
import { Link } from "react-router-dom";
import NavBar from "../components/nav-bar";
import "./add-data-page.css";

function AddDataPage() {
    return (
        <div className="add-data-page">
            <NavBar/>
            <div className="header-container">
                <img src={require("../images/start-black-icon.png")} className="start-icon-align" alt="start" />
                <h1 className="start-weighing-header">Start Weighing</h1>
            </div>
            <div className="details-container">
                <div class="two-col-grid">
                    <div className="col1">
                        <div class="profile-container">
                            <img className="profile-img" src={require("../images/my-account-icon.png")} alt="Profile Image" />
                        </div>
                    </div>
                    <div className="col2">
                        <div class="edit-container">
                            <h1>Name</h1>
                            <div class="scale-id-container">
                                <label>Scale ID</label>

                                <div class="dropdown">
                                        <button class="dropbtn"><i class="arrow down"></i></button>
                                        <div class="dropdown-content">
                                            <a href="#">A-1</a>
                                            <a href="#">A-2</a>
                                            <a href="#">A-3</a>
                                        </div>
                                </div> 
                                
                            </div>
                        </div>
                        <div class="button-container">
                            <div class="buttons">
                                <Link to="/dog-detail">
                                    <button type="submit" id="cancelBtn" className="cancel-btn">Cancel</button>
                                </Link>
                                <Link to="/add-data-processing">
                                    <button type="submit" id="saveBtn" className="save-btn">Save</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default AddDataPage;
