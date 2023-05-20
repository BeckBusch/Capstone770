import "../css/DogDetailPage.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContextProvider";
import Chart from "chart.js/auto";

import NavBar from "../components/NavBar";
import StartWhite from "../assets/icon-start-white.png";
import MyAccountWhite from "../assets/icon-account-white.png";

function DogDetailPage() {
  const { dogs, dogID, addWeight, getWeights } = useContext(AppContext);

  console.log("inside dog detail page");
  console.log("dog id is ", dogID);

  var name;
  var breed;
  var age;
  var gender;
  var location;
  var prevWeights = [];
  var lastWeight = "-";
  var weighedOn =  "-";
  var weighedBy =  "-";
  var weighedByRole = ""

  for (const dog of dogs) {
    if (dog["_id"] == dogID) {
      name = dog["name"];
      breed = dog["breed"];
      age = dog["age"];
      gender = dog["gender"];
      location = dog["location"];
      prevWeights = dog["prevWeights"];
      console.log("prevWeights: ", prevWeights)
    }
  }

  if (prevWeights && prevWeights.length > 0) {
    console.log("is not empty")
    lastWeight = prevWeights[prevWeights.length-1][0]
    // weighedOn = prevWeights[prevWeights.length-1][1].slice(0, 10)
    var d = new Date(prevWeights[prevWeights.length-1][1]);
    weighedOn = d.toLocaleDateString('en-GB');
    weighedBy = prevWeights[prevWeights.length-1][2]
    weighedByRole = "(" + prevWeights[prevWeights.length-1][3] + ")"
  } else {
    console.log("is empty")
  }

  // document.getElementById('weighedByLabel').innerHTML = weighedBy + " (" + weighedByRole + ")"; 

  async function handleAddWeight() {
    // await addWeight(5.92, 2, "Ally", "Vet");
    console.log("addWeight");
  }

  useEffect(() => {
    const renderDogDetailsTableDiv = document.querySelector('.renderDogDetailsTable');
        if (renderDogDetailsTableDiv.children.length === 0) {
        const table = renderDogDetailsTable();
        renderDogDetailsTableDiv.appendChild(table);
        }

    var ctx = document.getElementById("chartId").getContext("2d");  

    console.log("checking: ", prevWeights)
    const xAxes = []
    const yAxes = []
    for (const prevWeight of prevWeights) {
      var d = new Date(prevWeight[1]);
      var date = d.toLocaleDateString('en-GB');
      xAxes.push(date)

      var weightValue = prevWeight[0]
      yAxes.push(weightValue)
    }
    console.log("xAxes = ", xAxes)
    console.log("yAxes = ", yAxes)

    const data = {
      labels: xAxes,
      datasets: [{
        data: yAxes,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // const footer = (tooltipItems) => {
    //   return 'Weighed by: ' + weighedBy;
    // };

    const config = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false
          },
          // tooltip: {
          //   callbacks: {
          //     footer: footer,
          //   }
          // }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Kg'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          }
        } 
      }
      
    };

  const myLineChart = new Chart(ctx, config);

  // when component unmounts
  return () => {
    myLineChart.destroy()
  }

  }, []);


  const renderDogDetailsTable = () => { 
    const table = document.createElement('table');

    const allWeightValues = new Array();
    allWeightValues.push(["Weight (kg)", "Date", "Time", "Staff", "Role"]);

    for (const prevWeight of prevWeights) {
      var weight = prevWeight[0]
      var d = new Date(prevWeight[1]);
      var date = d.toLocaleDateString('en-GB');
      var time = d.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })
      var staff = prevWeight[2]
      var role = prevWeight[3]
      allWeightValues.push([weight, date, time, staff, role]);
    }
    console.log("allWeightValues: ", allWeightValues);

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

  function getGraph() {
    var targetDiv = document.getElementById("chart-display");
    var targetTableDiv = document.getElementById("table-display");

    targetDiv.style.display = "flex"
    targetTableDiv.style.display = "none"

    var tableButton = document.getElementById("table-container");
    tableButton.style.backgroundColor = "#8BA5BD";

    var chartButton = document.getElementById("chart-container");
    chartButton.style.backgroundColor = "#BDD3E8";

    var extraMessage = document.getElementById("extra-msg");
    extraMessage.style.display = "block";

  }

  function getTable() {
    var targetDiv = document.getElementById("chart-display");
    var targetTableDiv = document.getElementById("table-display");

    targetDiv.style.display = "none"
    targetTableDiv.style.display = "block"

    var tableButton = document.getElementById("table-container");
    tableButton.style.backgroundColor = "#BDD3E8";

    var chartButton = document.getElementById("chart-container");
    chartButton.style.backgroundColor = "#8BA5BD";

    var extraMessage = document.getElementById("extra-msg");
    extraMessage.style.display = "none";

  }

  return (
    <div className="dog-detail-page">
      <NavBar />

      <div className="dog-detail-page-content">
        <div className="outer-button-container">
          <div className="dog-detail-button-container">
            <div className="buttons">
              <Link to="/dog/:id/add-data">
                {/* <button type="submit" id="startWeighingBtn" className="start-weighing-btn" onClick={() => handleAddWeight()}> */}
                <button
                type="submit"
                id="startWeighingBtn"
                className="start-weighing-btn"
                onClick={() => handleAddWeight()}>
                  <img className="start-img" src={StartWhite} alt="start Image" />
                  Start Weighing
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
                  <div>
                    <label htmlFor="Breed">Breed:</label>
                  </div>
                  <div>
                    <p>{breed}</p>
                  </div>

                  <div>
                    <label htmlFor="Id">ID:</label>
                  </div>
                  <div>
                    <p>{dogID}</p>
                  </div>

                  <div>
                    <label htmlFor="Age">Age:</label>
                  </div>
                  <div>
                    <p>{age} Years Old</p>
                  </div>

                  <div>
                    <label htmlFor="last-weight">Last Weight:</label>
                  </div>
                  <div>
                    <p>{lastWeight}</p>
                  </div>

                  <div>
                    <label htmlFor="Gender">Gender:</label>
                  </div>
                  <div>
                    <p>{gender}</p>
                  </div>

                  <div>
                    <label htmlFor="weighed-on">Weighed on:</label>
                  </div>
                  <div>
                    <p>{weighedOn}</p>
                  </div>

                  <div>
                    <label htmlFor="Location">Location:</label>
                  </div>
                  <div>
                    <p>{location}</p>
                  </div>

                  <div>
                    <label htmlFor="weighed-by">Weighed by:</label>
                  </div>
                  <div>
                    <p id="weighedByLabel">{weighedBy} {weighedByRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="graph-container">
          <h1 className="weight-header">Weight</h1>

          <div className="table-chart-container">
            <div className="table-chart-container-2">
                <div className="table-container" id="table-container">
                  <div className="table-button">
                      <button type="submit" id="tableBtn" className="table-btn"
                      onClick={() => getTable()}
                      >Table
                      </button>
                  </div>
                </div>
                <div className="chart-container" id="chart-container">
                  <div className="chart-button">
                      <button type="button" id="chartBtn" className="chart-btn"
                      onClick={() => getGraph()}
                      >Chart
                      </button>
                  </div>
                </div>
            </div>

            <div className="graph" id="graph">
              <div className="chart-display" id="chart-display">
                <canvas className="canvas" id="chartId"></canvas>
              </div>
              <div className="table-display" id="table-display">
                <table className="renderDogDetailsTable"></table>
              </div>
            </div>
          </div>

          <div className="extra-msg" id="extra-msg">
            <p>
              ** Hover over points to see details - precise measurements, date and
              time of measurement, vet/volunteer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogDetailPage;
