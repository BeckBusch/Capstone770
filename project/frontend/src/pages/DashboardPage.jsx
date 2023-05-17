import "../css/DashboardPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
// import './App.css'
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import DashboardCard from "../components/DashboardCard";

function DashboardPage() {
  const { dogs, dogID, setDogID } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClick = (str) => {
    setDogID(str);
    console.log("dog id = ", str);
    navigate("/dog/:id");
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
          <button className="sort-btn"></button>
          <button className="filter-btn"></button>
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
