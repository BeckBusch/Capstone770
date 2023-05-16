import "../css/DogDetailPage.css";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/nav-bar";
import StartIcon from "../assets/start-icon.png";
import MyAccountIcon from "../assets/my-account-icon.png";

function DogDetailPage() {  
    return (
      <div className="dog-detail-page">
          <NavBar/>
          <div className="outer-button-container">
              <div className="dog-detail-button-container">
                  <div className="buttons">
                      <Link to="/dog/:id/add-data">
                          <button type="submit" id="startWeighingBtn" className="start-weighing-btn">
                          <img className="start-img" src={StartIcon} alt="start Image" />Start Weighing</button>
                      </Link>
                  </div>
              </div> 
          </div>

          <div className="container-div">
            <div className="two-columns-grid">
                <div className="detail-col-one">
                    <div>
                        <div className="dog-image-container">
                            <img className="profile-img" src={MyAccountIcon} alt="Profile Image" />
                        </div>
                    </div>
                </div>
                <div className="detail-col-two">
                    <div className="dog-info-container">
                        <h1 className="name-header">Name</h1>
                        <div className="four-columns-grid">
                            <div><label htmlFor="Breed">Breed:</label></div>
                            <div><p>Maltese</p></div>

                            <div><label htmlFor="Id">ID:</label></div>
                            <div><p>123456</p></div>


                            <div><label htmlFor="Age">Age:</label></div>
                            <div><p>3 Years Old</p></div>

                            <div><label htmlFor="last-weight">Last Weight:</label></div>
                            <div><p>7.00kg</p></div>


                            <div><label htmlFor="Gender">Gender:</label></div>
                            <div><p>Male</p></div>

                            <div><label htmlFor="weighed-on">Weighed on:</label></div>
                            <div><p>03/03/2023</p></div>


                            <div><label htmlFor="Location">Location:</label></div>
                            <div><p>Auckland</p></div>

                            <div><label htmlFor="weighed-by">Weighed by:</label></div>
                            <div><p>Juwon Jung (Vet)</p></div>
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
  
  export default DogDetailPage
  