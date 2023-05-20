import "../css/AddDataProcessingPage.css";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import DogPaw from "../assets/icon-dog-paw.png";

function AddDataProcessingPage() {
  const { getWeightDate } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    setInterval(function () {
      var currentDateTime = new Date().toISOString;
      checkUpdatedWeight(currentDateTime);
    }, 10000);
  }, []);

  async function checkUpdatedWeight(currentDateTime) {
    const updatedWeights = await getWeightDate();
    for (const updatedWeight of updatedWeights) {
      if (currentDateTime < updatedWeight["createdAt"]) {
        navigate("/dog/:id/add-data/confirm");
      }
    }
  }

  return (
    <div className="add-dog-processing-page">
      <NavBar />
      <div className="outer-circle">
        <div className="circle">
          <div className="circle-container">
            <div className="footprint-container">
              <img
                className="dog-footprint-img one"
                src={DogPaw}
                alt="Dog Footprint Image"
              />
              <img
                className="dog-footprint-img two"
                src={DogPaw}
                alt="Dog Footprint Image"
              />
              <img
                className="dog-footprint-img three"
                src={DogPaw}
                alt="Dog Footprint Image"
              />
            </div>
            <div className="text-container">
              <p className="processing-text">Processing...</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/dog/:id/add-data/confirm">
        <button type="submit" id="cancelBtn" className="next-btn">
          Next
        </button>
      </Link>
    </div>
  );
}

export default AddDataProcessingPage;
