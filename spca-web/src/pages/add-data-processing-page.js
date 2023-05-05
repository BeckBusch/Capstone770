import React from "react"
import { Link } from "react-router-dom";
import NavBar from "../components/nav-bar";
import "./add-data-processing-page.css";

function AddDataProcessingPage() {
    return (
        <div className="add-dog-processing-page">
                <NavBar/>
                <div className="circle">
                    <div className="circle-container">
                        <div className="footprint-container">
                            <img className="dog-footprint-img one" src={require("../images/dog-footprint-image.png")} alt="Dog Footprint Image" />
                            <img className="dog-footprint-img two" src={require("../images/dog-footprint-image.png")} alt="Dog Footprint Image" />
                            <img className="dog-footprint-img three" src={require("../images/dog-footprint-image.png")} alt="Dog Footprint Image" />
                        </div>
                        <div className="text-container">
                            <p className="processing-text">Processing...</p>
                        </div>
                    </div>
                </div>
                <Link to="/dog-detail">
                    <button type="submit" id="cancelBtn" className="next-btn">Next</button>
                </Link>
        </div>
    )
}

export default AddDataProcessingPage;