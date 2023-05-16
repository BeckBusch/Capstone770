import "../css/AddDataProcessingPage.css";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/nav-bar";
import DogFootprintOne from "../assets/dog-footprint-image.png";
import DogFootprintTwo from "../assets/dog-footprint-image.png";
import DogFootprintThree from "../assets/dog-footprint-image.png";


function AddDataProcessingPage() {  
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
  