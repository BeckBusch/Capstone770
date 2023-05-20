import "../css/AddDataPage.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import StartBlack from "../assets/icon-start-black.png";
import MyAccountWhite from "../assets/icon-account-white.png";

function AddDataPage() {
  const { setscaleID } = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function checkValidSelection(x) {
    const selectedValue =
      x.options[x.selectedIndex].value == "none" ? true : false;

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
    const selectedScale = getSelectedScale();
    checkValidSelection(selectedScale);
  }

  return (
    <div className="add-data-page">
      <NavBar />
      <div className="add-data-page-content">

      <div className="add-data-header-container">
        <img src={StartBlack} className="start-icon-align" alt="start" />
        <h1 className="start-weighing-header">Start Weighing</h1>
      </div>
      <div className="align-center-div">
        <div className="details-container">
          <div className="two-col-grid">
            <div className="col1">
              <div className="profile-container">
                <img
                  className="profile-img"
                  src={MyAccountWhite}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="col2">
              <h1>Name</h1>
              <div className="scale-id-container">
                <label className="scale-label">Scale ID</label>
                <select
                  className="select-scale"
                  name="scale-id"
                  id="scale"
                  defaultValue={"none"}
                >
                  <option value="none" disabled hidden>
                    Select ...
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
                    <button type="submit" id="cancelBtn" className="cancel-btn">
                      Cancel
                    </button>
                  </Link>
                  <button
                    type="submit"
                    id="saveBtn"
                    className="save-btn"
                    onClick={() => handleScaleID()}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AddDataPage;
