import React from "react"
import { Link } from "react-router-dom";
import NavBar from "../components/nav-bar";
import "./add-data-results-page.css";

function AddDataResultsPage() {
    return (
        <div className="add-data-results-page">
            <NavBar/>
            <div className="header-container">
                <img src={require("../images/start-black-icon.png")} className="start-icon-align" alt="start" />
                <h1 className="start-weighing-header">Start Weighing</h1>
            </div>
            <div className="results-container">
            {/* <h1>Custom Radio Buttons</h1>
            <label class="container">One
            <input type="radio" checked="checked" name="radio"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Two
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Three
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Four
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label> */}
            <div class="board-grid">
                <div class="rowGrid">
                <div class="board-label">
                    <label class="container">
                        <input type="radio" checked="checked" name="radio"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="board-label">
                    <label>Weight (kg)</label>
                </div>
                <div class="board-label">
                    <label>Date</label>
                </div>
                <div class="board-label">
                    <label>Time</label>
                </div>
                </div>

                <div class="rowGrid">
                <div class="board-labe">
                    <label class="container">
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="board__item"></div>
                <div class="board__item"></div>
                <div class="board__item"></div>
                </div>
                <div class="rowGrid">
                <div class="board__item"></div>
                <div class="board__item"></div>
                <div class="board__item"></div>
                <div class="board__item"></div>
                </div>
                <div class="rowGrid">
                <div class="board__item"></div>
                <div class="board__item"></div>
                <div class="board__item"></div>
                <div class="board__item"></div>
                </div>
                <div class="rowGrid">
                <div class="board__item"></div>
                <div class="board__item"></div>
                <div class="board__item"></div>
                <div class="board__item"></div>
                </div>
            </div>

            <div>
                <table id="table" border="1">
                    <tr id="first-tr">
                        <th>Select</th>
                        <th>Weight (kg)</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td><input type="radio" name="select"></input></td>
                        <td>AAAA</td>
                        <td>BBBB</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="select"></input></td>
                        <td>CCCC</td>
                        <td>DDDD</td>
                        <td>20</td>
                    </tr>
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