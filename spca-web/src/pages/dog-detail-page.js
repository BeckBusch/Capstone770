import React from "react"
import { Link } from "react-router-dom";
import NavBar from "../components/nav-bar";
import "./dog-detail-page.css";

function DogDetailPage() {
    return (
        <div className="dog-detail-page">
            <div className="dog-detail-container">
                <NavBar/>
                <div class="button-container">
                        <div class="buttons">
                            <Link to="/add-data">
                                <button type="submit" id="startWeighingBtn" className="start-weighing-btn">
                                <img className="start-img" src={require("../images/start-icon.png")} alt="start Image" />Start Weighing</button>
                            </Link>
                        </div>
                </div> 
                <div class="two-columns-grid">
                    <div>
                        <div class="dog-image-align">
                            <div class="dog-image-container">
                                <img className="profile-img" src={require("../images/my-account-icon.png")} alt="Profile Image" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="dog-info-container">
                            <h1 class="name-header">Name</h1>
                            <div class="two-columns-grid2">
                                <div class="column1">
                                    <div>
                                        <label for="Breed">Breed:</label>
                                        <p>Maltese</p>
                                    </div>
                                    <div>
                                        <label for="Age">Age:</label>
                                        <p>3 Years Old</p>
                                    </div>
                                    <div>
                                        <label for="Gender">Gender:</label>
                                        <p>Male</p>
                                    </div>
                                    <div>
                                        <label for="Location">Location:</label>
                                        <p>Auckland</p>
                                    </div>
                                </div>
                                <div class="column2">
                                    <div>
                                        <label for="Id">ID:</label>
                                        <p>123456</p>
                                    </div>
                                    <div>
                                        <label for="last-weight">Last Weight:</label>
                                        <p>7.00kg</p>
                                    </div>
                                    <div>
                                        <label for="weighed-on">Weighed on:</label>
                                        <p>03/03/2023</p>
                                    </div>
                                    <div>
                                        <label for="weighed-by">Weighed by:</label>
                                        <p>Juwon Jung </p>
                                        <p>(Vet)</p>
                                    </div>

                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="graph-container">
                <h1 className="weight-header">Weight</h1>

                <div className="table-chart-container">
                    <div className="table-container">
                        <div className="table-button">
                            <Link to="/">
                                <button type="submit" id="tableBtn" className="table-btn">Table</button>
                            </Link>
                        </div>
                    </div>
                    <div className="chart-container">
                        <div className="chart-button">
                            <Link to="/">
                                <button type="submit" id="chartBtn" className="chart-btn">Chart</button>
                            </Link>
                        </div>
                    </div>

                    {/* <div className="graph-button-container">
                            <div class="graph-buttons">
                                <Link to="/">
                                    <button type="submit" id="tableBtn" className="table-btn">Table</button>
                                </Link>
                                <Link to="/">
                                    <button type="submit" id="chartBtn" className="chart-btn">Chart</button>
                                </Link>
                            </div>
                    </div> */}
                
                    <div className="graph">
                        <p>diagram goes here</p>
                        
                    </div>

                </div>

                <div className="extra-msg">
                    <p>** Hover over points to see details - precise measurements, date and time of measurement, vet/volunteer</p>
                </div>
                
                

            </div>

            

        </div>
    )
}

export default DogDetailPage;