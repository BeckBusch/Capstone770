import "../css/AddDataProcessingPage.css";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import DogFootprintOne from "../assets/dog-footprint-image.png";
import DogFootprintTwo from "../assets/dog-footprint-image.png";
import DogFootprintThree from "../assets/dog-footprint-image.png";


function AddDataProcessingPage() {  
    const {
        scaleID,
        setscaleID,
        weights,
        getWeights,
        getWeightDate,
        addWeight
    } = useContext(AppContext);

    const navigate = useNavigate();

    useEffect(() => {
        setInterval(function(){    
            var currentDateTime = new Date().toISOString;    
            checkUpdatedWeight(currentDateTime);
        }, 10000);
    }, []);
    

    async function checkUpdatedWeight(currentDateTime) {
        // await addWeight(4.06, 5, "Amy", "Volunteer");

        const updatedWeights = await getWeightDate();
        for (let i=0; i<updatedWeights.length; i++) {
            var updatedDateTime = updatedWeights[i]["createdAt"];

            if (currentDateTime < updatedDateTime) {
                navigate("/dog/:id/add-data/confirm");
            }
        }

      }
    
    return (
      <div className="add-dog-processing-page">
          <NavBar/>
          <div className="outer-circle">
              <div className="circle">
                  <div className="circle-container">
                      <div className="footprint-container">
                          <img className="dog-footprint-img one" src={DogFootprintOne} alt="Dog Footprint Image" />
                          <img className="dog-footprint-img two" src={DogFootprintTwo} alt="Dog Footprint Image" />
                          <img className="dog-footprint-img three" src={DogFootprintThree} alt="Dog Footprint Image" />
                      </div>
                      <div className="text-container">
                          <p className="processing-text">Processing...</p>
                      </div>
                  </div>
              </div>
          </div>
          <Link to="/dog/:id/add-data/confirm">
              <button type="submit" id="cancelBtn" className="next-btn">Next</button>
          </Link>
      </div>
    )
  }
  
  export default AddDataProcessingPage
  