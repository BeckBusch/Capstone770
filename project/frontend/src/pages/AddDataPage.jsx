import "../css/AddDataPage.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import StartBlackIcon from "../assets/start-black-icon.png";
import MyAccountIcon from "../assets/my-account-icon.png";

function AddDataPage() {  
    const {
        scaleID,
        setscaleID,
        dogID
      } = useContext(AppContext);

    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    function checkValidSelection(x) {
        var selectedValue = (x.options[x.selectedIndex].value=="none") ? true : false;

        if (selectedValue) {
            setErrorMessage("Please select scale.");
        } else {
            navigate("/dog/:id/add-data/processing");
        }
    }

      function getSelectedScale() {
        const x = document.getElementById("scale");
        setscaleID(x.options[x.selectedIndex].value);

        return x;
      }

    async function handleScaleID() {
        var selectedScale = getSelectedScale();
        checkValidSelection(selectedScale);
    }

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
                            <h1>Name</h1>
                            <div className="scale-id-container">
                                <label className="scale-label">Scale ID</label>
                                <select className="select-style"
                                name="scale-id"
                                id="scale"
                                defaultValue={"none"}>
                                    <option value="none" disabled hidden>
                                    Select scale ID
                                    </option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </select>
                            </div>
                            {/* Error Message */}
                            <div className="add-data-error-msg">
                                <p> {errorMessage} </p>
                            </div>
                            <div className="button-container">
                                <div className="buttons">
                                    <Link to="/dog/:id">
                                        <button type="submit" id="cancelBtn" className="cancel-btn">Cancel</button>
                                    </Link>
                                        <button type="submit" id="saveBtn" className="save-btn"
                                        onClick={() => handleScaleID()}
                                        >Save</button>
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
  