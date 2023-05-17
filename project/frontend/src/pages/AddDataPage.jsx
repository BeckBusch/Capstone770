import "../css/AddDataPage.css";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import StartBlackIcon from "../assets/start-black-icon.png";
import MyAccountIcon from "../assets/my-account-icon.png";

function AddDataPage() {  
    return (
      <div className="add-data-page">
          <NavBar/>
          <div className="add-data-header-container">
              <img src={StartBlackIcon} className="start-icon-align" alt="start" />
              <h1 className="start-weighing-header">Start Weighing</h1>
          </div>
          <div className="align-center-div">
              <div className="details-container">
                  <div className="two-col-grid">
                      <div className="col1">
                          <div className="profile-container">
                              <img className="profile-img" src={MyAccountIcon} alt="Profile Image" />
                          </div>
                      </div>
                      <div className="col2">
                          {/* <div className="edit-container"> */}
                              <h1>Name</h1>
                              <div className="scale-id-container">
                                  <label className="scale-label">Scale ID</label>
                                  <select
                                    className="select-style"
                                    name="scale-id"
                                    id="scale"
                                    defaultValue={"none"}>
                                    <option value="none" disabled hidden>
                                    Select scale ID
                                    </option>
                                    <option value="A-1">A-1</option>
                                    <option value="A-2">A-2</option>
                                    <option value="A-2">A-3</option>
                                </select>
                              </div>
                          {/* </div> */}
                          <div className="button-container">
                              <div className="buttons">
                                  <Link to="/dog/:id">
                                      <button type="submit" id="cancelBtn" className="cancel-btn">Cancel</button>
                                  </Link>
                                  <Link to="/dog/:id/add-data/processing">
                                      <button type="submit" id="saveBtn" className="save-btn">Save</button>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    )
  }
  
  export default AddDataPage
  