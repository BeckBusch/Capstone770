import "../css/AddDataPage.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";

function AddDataPage() {
  const { scaleID, setscaleID } = useContext(AppContext);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const processData = (e) => {
    e.preventDefault();
    if (scaleID == "none") {
      setErrorMessage("Please select scale.");
    } else {
      navigate("/dog/:id/add-data/processing");
      console.log(scaleID)
    }
  };

  async function handleScaleSelect() {
    setscaleID(document.getElementById("scale").value);
  }

  return (
    <div className="add-data-page">
      <NavBar />
      <div className="add-data-page-content">

      <div className="add-data-header">
          <h1 className="add-data-header-line-1">New</h1>
          <h1 className="add-data-header-line-2">Weighing</h1>
          <h1 className="add-data-header-line-3">Session</h1>
        </div>

        <div className="add-data-form">
        <div className="add-data-form-card">
          <form onSubmit={processData}>
            <div className="add-data-two-columns-grid">
              {/* Sex */}
              <label htmlFor="Sex">Scale ID</label>
              <div className="scale-select-styling">
                <select
                  className="scale-select"
                  name="scale-options"
                  id="scale"
                  defaultValue="none"
                  onChange={() => handleScaleSelect()}
                >
                  <option value="none" disabled hidden>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            {/* Error Message */}
            <div className="add-data-error-msg text-align-right">
              <p>{errorMessage}</p>
            </div>
            {/* Buttons */}
            <div className="add-data-buttons-div">
              <div className="add-data-buttons">
                <Link to="/dog/:id">
                  <button className="cancel-scale-btn">Cancel</button>
                </Link>
                <button type="submit" id="signUpBtn" className="select-btn">
                  Select
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

export default AddDataPage;
