import "../css/DashboardPage.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthDetails from "../AuthDetails";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import DashboardCard from "../components/DashboardCard";
import LoginPage from "./LoginPage";

function DashboardPage() {
  const {
    loggedIn,
    dogs,
    setDogID,
    getAllDogs,
    sortDogAToZ,
    sortDogZToA
  } = useContext(AppContext);

  AuthDetails();

  const navigate = useNavigate();
  function navigateToAddDog() { navigate("/add-dog"); }

  function navigateToDogDetails(str) {
    setDogID(str);
    navigate(`/dog/${str}`);
  }

  const [sort, setSort] = useState(true);

  function sortAlphabetically() {
    setSort(!sort);
    handleSortDogs();
  }

  async function handleSortDogs() { sort ? await sortDogAToZ() : await sortDogZToA(); }
  
  async function handleGetAllDogs() { await getAllDogs(); }

  return loggedIn ? (
    <div className="dashboard-page">
      <NavBar />
      {/* Search / Filter Container */}
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
      {/* Dog Cards */}
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
  ) : (
    <LoginPage />
  );
}

export default DashboardPage;
