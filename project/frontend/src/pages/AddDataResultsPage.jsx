import "../css/AddDataResultsPage.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import StartBlack from "../assets/icon-start-black.png";

function AddDataResultsPage() { 
    const {
        scaleID,
        weights,
        dogs,
        updateDog,
        dogID,
        removeWeight,
    } = useContext(AppContext); 

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    var select = document.createElement("input");

    const renderManageUserBoard = () => { 
        const table = document.createElement('table');

        const allScaleIDValues = new Array();
        allScaleIDValues.push(["", "Weight (kg)", "Date", "Time"]);

        for (let i = 0; i < weights.length; i++) {
            if (scaleID == weights[i]["scaleId"]) {
                var d = new Date(weights[i]["createdAt"]);
                var date = d.toLocaleDateString('en-GB');
                var time = d.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })

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
            const newWeight = getNewWeight(selectedValue);
            const previousCurrentWeight = getPreviousCurrentWeight();
            previousCurrentWeight.push(newWeight)
            const previousWeight = getPreviousWeight()
            previousWeight.push(newWeight)
            console.log("getnewweight: ", newWeight)
            console.log("getprevouscurrentweight: ", previousCurrentWeight)
            console.log("previouswegiht: ", previousWeight)
            updateDog(dogID, previousCurrentWeight, previousWeight)
            removeWeight(scaleID);
            // console.log("weights: ", weights);
            // const freshWeights = await getWeights()
            // console.log("fresh weights: ", freshWeights);

            navigate("/dog/:id");
        } else {
            setErrorMessage("No weight selected.");
        }  
    }

    function getNewWeight(selectedValue) {
        for (let i = 0; i < weights.length; i++) {
            if (weights[i]["_id"] == selectedValue) {                
                const newWeights = new Array(weights[i]["weight"], weights[i]["createdAt"], weights[i]["staff"],  weights[i]["staffRole"])
                return newWeights;
            }
        }
    }

    function getPreviousWeight() {
        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i]["_id"] == dogID) {
                const previousWeights = dogs[i]["prevWeights"]
                return previousWeights
            }
        }
    }

    function getPreviousCurrentWeight() {
        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i]["_id"] == dogID) {
                const previousWeights = dogs[i]["currentWeight"]
                return previousWeights
            }
        }
    }
    

    return (
      <div className="add-data-results-page">
          <NavBar/>
          <div className="add-data-results-header-container">
              <img src={StartBlack} className="settings-icon-align" alt="start" />
              <h1 className="start-weighing-header">Start Weighing</h1>
          </div>
          <div className="results-container">
              <div>
                <table className="renderManageUserBoard"></table>
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
  