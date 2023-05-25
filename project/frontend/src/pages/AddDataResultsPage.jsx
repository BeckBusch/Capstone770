import "../css/AddDataResultsPage.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";

function AddDataResultsPage() {
  const { scaleID, weights, dogs, updateDog, dogID, removeWeight, userName, userRole, prevWeights, setPrevWeights, getWeights, refreshWeights } =
    useContext(AppContext);

  // const prevWeights = [];
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  var updatedWeights = new Array();

  var select = document.createElement("input");


  // async function checkUpdatedWeight() {
  //   updatedWeights = await getWeights();
  //     console.log("updatedweights: ", updatedWeights);
  // }

  const renderWeightResultsBoard = () => {

    // checkUpdatedWeight();

  
    console.log("updatedweights222222: ", updatedWeights);

    const table = document.createElement("table");

    const allScaleIDValues = new Array();
    allScaleIDValues.push(["", "Weight (kg)", "Date", "Time"]);

    for (const weight of updatedWeights) {
      if (scaleID == weight["scaleId"]) {
        var d = new Date(weight["createdAt"]);
        var date = d.toLocaleDateString("en-GB");
        var time = d.toLocaleString("en-GB", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

        console.log(weight["weight"]);
        allScaleIDValues.push([
          "",
          weight["weight"],
          date,
          time,
          weight["_id"],
        ]);
      }
    }
    //console.log("allscaleidvalues: ", allScaleIDValues);

    //Get the count of columns.
    const columnCount = allScaleIDValues[0].length;

    //Add the header row.
    let row = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
      const headerCell = document.createElement("TH");
      headerCell.innerHTML = allScaleIDValues[0][i];
      row.appendChild(headerCell);
    }

    const temp = new Array()

    if (allScaleIDValues.length > 1) {
      for (let i = 0; i < prevWeights.length; i++) {
        temp.push(prevWeights[i]);
      }
      temp.push(allScaleIDValues[allScaleIDValues.length - 1]);
      setPrevWeights(temp);
    }


    //Add the data rows.
    for (let i = 0; i < temp.length; i++) {
      row = table.insertRow(-1);

      for (let j = 0; j < columnCount; j++) {
        const cell = row.insertCell(-1);
        // console.log("cell: ", prevWeights[i][j]);
        if (j == 0) {
          select = document.createElement("input");
          select.setAttribute("type", "radio");
          select.setAttribute("name", "radio");
          select.setAttribute("value", temp[i][columnCount]);

          cell.append(select);
        } else {
          cell.innerHTML = temp[i][j];
        }
      }
    }

    return table;
  };

  useEffect(() => {
    // const renderWeightResultsBoardDiv = document.querySelector(
    //   ".renderWeightResultsBoard"
    // );
    // if (renderWeightResultsBoardDiv.children.length === 0) {
    //   const table = renderWeightResultsBoard();
    //   renderWeightResultsBoardDiv.appendChild(table);
    // }
    async function checkUpdatedWeight() {
      updatedWeights = await getWeights();
        console.log("updatedweights: ", updatedWeights);
        newFunction()
    }

    checkUpdatedWeight();//.then(newFunction);

  }, []);

  function newFunction() {
    const renderWeightResultsBoardDiv = document.querySelector(
      ".renderWeightResultsBoard"
    );
    if (renderWeightResultsBoardDiv.children.length === 0) {
      const table = renderWeightResultsBoard();
      renderWeightResultsBoardDiv.appendChild(table);
    }
  }

  async function handleSelectedWeight() {
    const radioButtons = document.querySelectorAll('input[name="radio"]');
    let selectedValue;
    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        selectedValue = radioButton.value;
      }
    });

    console.log("BEFORE IF")
    if (selectedValue) {
      console.log("INSIDE IF")
      const newWeight = getNewWeight(selectedValue);
      // const previousCurrentWeight = getPreviousCurrentWeight();
      // previousCurrentWeight.push(newWeight);
      const previousWeight = getPreviousWeight();
      previousWeight.push(newWeight);
      console.log("getnewweight: ", newWeight);
      // console.log("getprevouscurrentweight: ", previousCurrentWeight);
      console.log("previouswegiht: ", previousWeight);
      updateDog(dogID, previousWeight);
      // removeWeight(scaleID);

      setPrevWeights("")
      navigate(`/dog/${dogID}`);
    } else {
      setErrorMessage("No weight selected.");
    }
  }

  function getNewWeight(selectedValue) {
    for (let i = 0; i < weights.length; i++) {
      if (weights[i]["_id"] == selectedValue) {
        const newWeights = new Array(
          weights[i]["weight"],
          weights[i]["createdAt"],
          userName,
          userRole,
        );
        console.log("newWeights: ", newWeights);
        return newWeights;
      }
    }
  }

  function getPreviousWeight() {
    for (let i = 0; i < dogs.length; i++) {
      if (dogs[i]["_id"] == dogID) {
        const previousWeights = dogs[i]["prevWeights"];
        return previousWeights;
      }
    }
  }

  // function getPreviousCurrentWeight() {
  //   for (let i = 0; i < dogs.length; i++) {
  //     if (dogs[i]["_id"] == dogID) {
  //       const previousWeights = dogs[i]["currentWeight"];
  //       return previousWeights;
  //     }
  //   }
  // }

  return (
    <div className="add-data-results-page">
      <NavBar />
      <div className="add-data-results-header">
        <h1 className="add-data-header-results-line-1">Select</h1>
        <h1 className="add-data-header-results-line-2">Weight</h1>
      </div>
      <div className="add-data-results-page-outer">
        <div>
          <div className="add-data-results-page-content">
            {/* <div className="add-data-results-header">
              <h1 className="add-data-header-results-line-1">Select</h1>
              <h1 className="add-data-header-results-line-2">Weight</h1>
            </div> */}

            <div className="data-results-container">
              <div className="render-weight-container">
                <table className="renderWeightResultsBoard"></table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="button-container">
            {/* Error Message */}
            <div className="add-data-results-error-msg">
              <p> {errorMessage} </p>
            </div>
            <div className="select-weight-buttons-div">
              <div className="select-weight-buttons">
                <Link to={`/dog/${dogID}/add-data/processing`}>
                  <button className="reweigh-btn">Reweigh</button>
                </Link>
                <button
                  type="submit"
                  id="signUpBtn"
                  className="select-btn"
                  onClick={() => handleSelectedWeight()}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDataResultsPage;
