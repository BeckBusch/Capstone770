import React from "react"
import { Link } from "react-router-dom";
import NavBar from "../components/nav-bar";
import "./add-data-results-page.css";

function AddDataResultsPage() {
    return (
        <div className="add-data-results-page">
            <NavBar/>
            <div className="add-data-results-header-container">
                <img src={require("../images/start-black-icon.png")} className="settings-icon-align" alt="start" />
                <h1 className="manage-users-header">Manage Users</h1>
            </div>
            <div className="results-container">
                <div>
                    <table class="resultsTable" id="resultsTable">
                        <thead>
                            <th></th>
                            <th>Weight (kg)</th>
                            <th>Date</th>
                            <th>Time</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="radio-button"><input type="radio" name="radio" value="radio1" required/></td>
                                <td>6.25</td>
                                <td>01/03/2023</td>
                                <td>10:49 AM</td>
                            </tr>
                            <tr>
                                <td className="radio-button"><input type="radio" name="radio" value="radio2" required/></td>
                                <td>6.03</td>
                                <td>02/03/2023</td>
                                <td>3:10 PM</td>        
                            </tr>
                            <tr>
                                <td className="radio-button"><input type="radio" name="radio" value="radio3" required/></td>
                                <td>8.08</td>
                                <td>03/03/2023</td>
                                <td>10:30 AM</td>        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="button-container">
                    <div class="buttons">
                        <Link to="/add-data-processing">
                            <button type="submit" id="reweighBtn" className="reweigh-btn">Reweigh</button>
                        </Link>
                        <Link to="/dog-detail">
                            <button type="submit" id="selectBtn" className="select-btn">Select</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default AddDataResultsPage;