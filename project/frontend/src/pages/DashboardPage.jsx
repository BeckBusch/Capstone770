import "../css/DashboardPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
// import './App.css'
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import DashboardCard from "../components/DashboardCard";

function DashboardPage() {
  const { dogs, dogID, setDogID, getAllDogs, sortDog, sortDog2} = useContext(AppContext);
  const [rollCount, setRollCount] = useState(0);

  const navigate = useNavigate();

  const handleClick = (str) => {
    setDogID(str);
    console.log("dog id = ", str);
    navigate("/dog/:id");
  }

  const sortAlphabetically = () => {
    console.log("filter button clicked");
    // dogs.find().sort({})
    handleGetDogs();
  }
  
  async function handleGetDogs() {
    const allDogs = await getAllDogs();
    console.log("Dog List: ", allDogs[0]);
  }

  const sortAlphabetically2 = () => {
    console.log("sort button clicked");
    console.log("rollCount = ", rollCount);
    setRollCount(rollCount + 1);
    console.log("rollCount = ", rollCount);
    handleGetSortDogs();
  }

  async function handleGetSortDogs() {
    if ((rollCount % 2) == 0) {
      console.log("EVEN");
      const allSortDogs = await sortDog();
      console.log("Dog: ", dogs);
      console.log("Dog Sort List: ", allSortDogs);
    } else {
      console.log("ODD");
      const allSortDogs2 = await sortDog2();
      console.log("Dog2: ", dogs);
      console.log("Dog Sort List2: ", allSortDogs2);
    }
    
  }

  return (
    <div className="dashboard-page">
      <NavBar />

      <div className="search-div">
        <div className="add-dog-container-div">
          <Link to="/add-dog">
            <button className="add-dog-btn">+ Add Dog</button>
          </Link>
        </div>
        <div className="search-container-div">
          <input
            type="text"
            placeholder="Search by name, breed etc."
            className="dashboard-search"
          />
          <button className="dashboard-search-button"></button>
        </div>
        <div className="filter-container-div">
          <button 
          className="sort-btn"
          onClick={() => sortAlphabetically2()}
          ></button>
          <button className="filter-btn"
          onClick={() => sortAlphabetically()}
          ></button>
        </div>
      </div>

      <div className="dog-cards-flex">
        {dogs.map(function (dog, i) {
          return (
            // <Link to="/dog/:id">
              <button className="dashboard-card-btn"
              onClick={() => handleClick(dog["_id"])}>
                <DashboardCard
                  key={i}
                  className="dog-card"
                  name={dog["name"]}
                  breed={dog["breed"]}
                  age={dog["age"]}
                />
              </button>
            // </Link>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
}

export default DashboardPage;
