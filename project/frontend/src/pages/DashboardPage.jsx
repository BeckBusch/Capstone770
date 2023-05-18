import "../css/DashboardPage.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import DashboardCard from "../components/DashboardCard";

function DashboardPage() {
  const { dogs, setDogID, getAllDogs, sortDogAToZ, sortDogZToA } =
    useContext(AppContext);

  const [rollCount, setRollCount] = useState(0);

  const navigate = useNavigate();

  function navigateToAddDog() {
    navigate("/add-dog");
  }

  function navigateToDogDetails(str) {
    setDogID(str);
    navigate(`/dog/${str}`);
  }

  function sortAlphabetically() {
    setRollCount(rollCount + 1);
    handleSortDogs();
  }

  async function handleSortDogs() {
    rollCount % 2 == 0 ? await sortDogAToZ() : await sortDogZToA();
  }

  async function handleGetAllDogs() {
    await getAllDogs();
  }

  return (
    <div className="dashboard-page">
      <NavBar />

      <div className="search-div">
        <div className="add-dog-container-div">
          <button className="add-dog-btn" onClick={() => navigateToAddDog()}>
            + Add Dog
          </button>
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
            onClick={() => sortAlphabetically()}
          ></button>
          <button
            className="filter-btn"
            onClick={() => handleGetAllDogs()}
          ></button>
        </div>
      </div>

      <div className="dog-cards-flex">
        {dogs.map(function (dog, i) {
          return (
            <button
              className="dashboard-card-btn"
              onClick={() => navigateToDogDetails(dog["_id"])}
              key={i}
            >
              <DashboardCard
                key={i}
                className="dog-card"
                name={dog["name"]}
                breed={dog["breed"]}
                age={dog["age"]}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardPage;
