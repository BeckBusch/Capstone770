import "../css/AddDataResultsPage.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import StartBlackIcon from "../assets/start-black-icon.png";

function AddDataResultsPage() { 
    const {
        scaleID,
        weights,
        getWeights,
        dogs,
        updateDog,
        getAllDogs,
        dogID
    } = useContext(AppContext); 

    const [errorMessage, setErrorMessage] = useState("");

    var select = document.createElement("input");

    const renderManageUserBoard = () => { 
        const table = document.createElement('table');

        // var x = document.createElement("INPUT");
        // x.setAttribute("type", "radio");

        const allScaleIDValues = new Array();
        allScaleIDValues.push(["", "Weight (kg)", "Date", "Time"]);

        for (let i = 0; i < weights.length; i++) {
            if (scaleID == weights[i]["scaleId"]) {
                var d = new Date(weights[i]["createdAt"]);
                var date = d.toLocaleDateString('en-GB');
                var time = d.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })

                // var x = document.createElement("INPUT");
                // x.setAttribute("type", "radio");
                // const select = document.createElement("input");
                // select.type("radio");

                allScaleIDValues.push(["", weights[i]["weight"], date, time, weights[i]["_id"]]);
            }
        } 
        console.log("allscaleidvalues: ", allScaleIDValues);
    
 
        //Get the count of columns.
        const columnCount = allScaleIDValues[0].length;
 
        //Add the header row.
        let row = table.insertRow(-1);
        for (let i = 0; i < columnCount; i++) {
            const headerCell = document.createElement("TH");
            headerCell.innerHTML = allScaleIDValues[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (let i = 1; i < allScaleIDValues.length; i++) {
            row = table.insertRow(-1);
            for (let j = 0; j < columnCount; j++) {
                const cell = row.insertCell(-1);
                console.log("cell: ", allScaleIDValues[i][j])
                if (j == 0) {
                    select = document.createElement("input")
                    select.setAttribute("type", "radio");
                    select.setAttribute("name", "radio");
                    select.setAttribute("value", allScaleIDValues[i][columnCount]);
                    
                    cell.append(select);
                } else {
                    cell.innerHTML = allScaleIDValues[i][j];
                }
            }
        }

        return table;
    };

    useEffect(() => {
        const renderManageUserBoardDiv = document.querySelector('.renderManageUserBoard');
        if (renderManageUserBoardDiv.children.length === 0) {
        const table = renderManageUserBoard();
        renderManageUserBoardDiv.appendChild(table);
        }
    }, []);    


    async function handleSelectedWeight() {
        const radioButtons = document.querySelectorAll('input[name="radio"]');
        let selectedValue;
        radioButtons.forEach((radioButton) => {
            if (radioButton.checked) {
            selectedValue = radioButton.value;
            }
        });
        
        if (selectedValue) {
            console.log('Selected value:', selectedValue);
            // const newDogValues = getDogValues()
            const newWeight = getWeightValue(selectedValue);
            const previousDogWeight = getDogValues()
            previousDogWeight.push(newWeight)
            console.log("new add previous dog weight: ", previousDogWeight)
            updateDog(dogID, previousDogWeight)
        } else {
            console.log('No radio button selected');
            setErrorMessage("No weight selected.");
        }  
    }

    function getWeightValue(selectedValue) {
        for (let i = 0; i < weights.length; i++) {
            if (weights[i]["_id"] == selectedValue) {
                const test = [weights[i]["weight"], weights[i]["createdAt"], weights[i]["staffRole"]]
                console.log("test = ", test)
                return test;
            }
        }
    }

    function getDogValues() {
        // await getAllDogs()
        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i]["_id"] == dogID) {
                const previousWeights = dogs[i]["prevWeights"]
                return previousWeights
            }
        }
    }
    

    return (
      <div className="add-data-results-page">
          <NavBar/>
          <div className="add-data-results-header-container">
              <img src={StartBlackIcon} className="settings-icon-align" alt="start" />
              <h1 className="start-weighing-header">Start Weighing</h1>
          </div>
          <div className="results-container">
              <div>
                  {/* <table className="resultsTable" id="resultsTable">
                      <thead>
                          <tr>
                              <th></th>
                              <th>Weight (kg)</th>
                              <th>Date</th>
                              <th>Time</th>
                          </tr>
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
                              <td>10:30 AM</td>        
                          </tr>
                      </tbody>
                  </table> */}
                <table className="renderManageUserBoard">
                {/* <tbody><tr><td><input id="weight-select" type="radio" name="radio" value="radio1" required/></td></tr>
                <tr><td><input id="weight-select" type="radio" name="radio" value="radio1" required/></td></tr></tbody> */}
                </table>

                
              </div>
              <div className="button-container">
                {/* Error Message */}
                <div className="add-data-results-error-msg">
                    <p> {errorMessage} </p>
                </div>
                  <div className="buttons">
                      <Link to="/dog/:id/add-data/processing">
                          <button type="submit" id="reweighBtn" className="reweigh-btn">Reweigh</button>
                      </Link>
                      {/* <Link to="/dog/:id"> */}
                          <button type="submit" id="selectBtn" className="select-btn"
                          onClick={() => handleSelectedWeight()}
                          >Select</button>
                      {/* </Link> */}
                  </div>
              </div>
          </div>
        </div>
    )
  }
  
  export default AddDataResultsPage
  