import "../css/DogDetailPage.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContextProvider";
import Chart from "chart.js/auto";

import NavBar from "../components/NavBar";
import MyAccountWhite from "../assets/icon-account-white.png";

function DogDetailPage() {
  const { dogs, dogID } = useContext(AppContext);

  var name, breed, age, gender, location;
  var lastWeight, weighedDate, weighedTime, weighedBy, weighedByRole = "-";
  var prevWeights = [];

  for (const dog of dogs) {
    if (dog["_id"] == dogID) {
      name = dog["name"];
      breed = dog["breed"];
      age = dog["age"] + " Years Old";
      gender = dog["gender"];
      location = dog["location"];
      prevWeights = dog["prevWeights"];
    }
  }

  if (prevWeights && prevWeights.length > 0) {
    lastWeight = prevWeights[prevWeights.length - 1][0] + " kg";
    weighedDate = new Date(prevWeights[prevWeights.length - 1][1]).toLocaleDateString("en-GB");
    weighedTime = "(" + prevWeights[prevWeights.length - 1][1].slice(11, 16) + ")";
    weighedBy = prevWeights[prevWeights.length - 1][2];
    weighedByRole = "(" + prevWeights[prevWeights.length - 1][3] + ")";
  }

  async function handleAddWeight() {
    console.log("addWeight");
  }

  useEffect(() => {
    const renderDogDetailsTableDiv = document.querySelector(
      ".renderDogDetailsTable"
    );
    if (renderDogDetailsTableDiv.children.length === 0) {
      const table = renderDogDetailsTable();
      renderDogDetailsTableDiv.appendChild(table);
    }

    var ctx = document.getElementById("chartId").getContext("2d");

    console.log("checking: ", prevWeights);
    const xAxes = [];
    const yAxes = [];
    for (const prevWeight of prevWeights) {
      var d = new Date(prevWeight[1]);
      var date = d.toLocaleDateString("en-GB");
      xAxes.push(date);

      var weightValue = prevWeight[0];
      yAxes.push(weightValue);
    }
    console.log("xAxes = ", xAxes);
    console.log("yAxes = ", yAxes);

    const data = {
      labels: xAxes,
      datasets: [
        {
          data: yAxes,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Kg",
            },
          },
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
        },
      },
    };

    const myLineChart = new Chart(ctx, config);

    setTableContainerHeight();

    return () => {
      myLineChart.destroy();
    };
  }, []);

  const renderDogDetailsTable = () => {
    const table = document.createElement("table");

    const allWeightValues = new Array();
    allWeightValues.push(["Weight (kg)", "Date", "Time", "Staff", "Role"]);

    for (const prevWeight of prevWeights) {
      var weight = prevWeight[0];
      var d = new Date(prevWeight[1]);
      var date = d.toLocaleDateString("en-GB");
      var time = d.toLocaleString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      var staff = prevWeight[2];
      var role = prevWeight[3];
      allWeightValues.push([weight, date, time, staff, role]);
    }
    
    //Get the count of columns.
    const columnCount = allWeightValues[0].length;

    //Add the header row.
    let row = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
      const headerCell = document.createElement("TH");
      headerCell.innerHTML = allWeightValues[0][i];
      row.appendChild(headerCell);
    }

    //Add the data rows.
    for (let i = 1; i < allWeightValues.length; i++) {
      row = table.insertRow(-1);
      for (let j = 0; j < columnCount; j++) {
        const cell = row.insertCell(-1);
        cell.innerHTML = allWeightValues[i][j];
      }
    }

    return table;
  };

  function setTableContainerHeight() {
    var heights = document.getElementById("graph").offsetHeight;
    var tableHeight = document.getElementById("table-div-fixed")
    tableHeight.style.height = heights+"px";
  }

  function getGraph() {
    var targetDiv = document.getElementById("chart-display");
    var targetTableDiv = document.getElementById("table-display");
    var targetTableDivOuter = document.getElementById("table-div-fixed");

    targetDiv.style.display = "flex";
    targetTableDiv.style.display = "none";
    targetTableDivOuter.style.display = "none";

    var tableButton = document.getElementById("table-container");
    tableButton.style.backgroundColor = "#DBDBDB";

    var chartButton = document.getElementById("chart-container");
    chartButton.style.backgroundColor = "#BDD3E8";

    var extraMessage = document.getElementById("extra-msg");
    extraMessage.style.display = "block";
  }

  function getTable() {
    var targetDiv = document.getElementById("chart-display");
    var targetTableDiv = document.getElementById("table-display");
    var targetTableDivOuter = document.getElementById("table-div-fixed");

    targetDiv.style.display = "none";
    targetTableDiv.style.display = "block";
    targetTableDivOuter.style.display = "block";

    var tableButton = document.getElementById("table-container");
    tableButton.style.backgroundColor = "#BDD3E8";

    var chartButton = document.getElementById("chart-container");
    chartButton.style.backgroundColor = "#DBDBDB";

    var extraMessage = document.getElementById("extra-msg");
    extraMessage.style.display = "none";
  }

  
  return (
    <div className="dog-detail-page">
      <NavBar />

      <div className="dog-detail-page-content">
        <div className="outer-button-container">
          <div className="dog-detail-button-container">
            <div className="buttons-container">
              <Link to="./add-data">
                <button
                  type="submit"
                  id="startWeighingBtn"
                  className="add-weight-btn"
                  onClick={() => handleAddWeight()}
                >
                  + Add Weight
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-div">
          <div className="two-columns-grid">
            <div className="detail-col-one">
              <div>
                <div className="dog-image-container">
                  <img
                    className="profile-img"
                    src={MyAccountWhite}
                    alt="Profile Image"
                  />
                </div>
              </div>
            </div>
            <div className="detail-col-two">
              <div className="dog-info-container">
                <h1 className="name-header">{name}</h1>
                <div className="four-columns-grid">
                  <label htmlFor="Breed">Breed:</label>
                  <p>{breed}</p>

                  <label htmlFor="last-weight">Last Weight:</label>
                  <p>{lastWeight}</p>

                  <label htmlFor="Age">Age:</label>
                  <p>{age}</p>

                  <label htmlFor="weighed-date">Weighed on:</label>
                  <p>{weighedDate} {weighedTime}</p>
                  <label htmlFor="Gender">Gender:</label>
                  <p>{gender}</p>
                  <label htmlFor="weighed-by">Weighed by:</label>
                  <p id="weighedByLabel">
                    {weighedBy} {weighedByRole}
                  </p>
                  <label htmlFor="Location">Location:</label>
                  <p>{location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="graph-container">
          <h1 className="weight-header">Previous Weights</h1>

          <div className="table-chart-container">
            <div className="table-chart-container-2">
              <div className="table-container" id="table-container">
                <div className="table-button">
                  <button
                    type="submit"
                    id="tableBtn"
                    className="table-btn"
                    onClick={() => getTable()}
                  >
                    Table
                  </button>
                </div>
              </div>
              <div className="chart-container" id="chart-container">
                <div className="chart-button">
                  <button
                    type="button"
                    id="chartBtn"
                    className="chart-btn"
                    onClick={() => getGraph()}
                  >
                    Chart
                  </button>
                </div>
              </div>
            </div>

            <div className="graph" id="graph">
              <div className="chart-display" id="chart-display">
                <canvas className="canvas" id="chartId"></canvas>
              </div>
              <div className="table-div-fixed" id="table-div-fixed">
                <div className="table-display" id="table-display">
                  <table className="renderDogDetailsTable"></table>
                </div>
              </div>
            </div>
          </div>

          <div className="extra-msg" id="extra-msg">
            <p>
              ** Hover over points to see details - precise measurements, date
              and time of measurement, vet/volunteer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogDetailPage;
