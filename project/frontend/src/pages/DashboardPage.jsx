import "../css/DashboardPage.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthDetails from "../AuthDetails";
import { AppContext } from "../AppContextProvider";

import LoginPage from "./LoginPage";
import NavBar from "../components/NavBar";
import DashboardCard from "../components/DashboardCard";

function DashboardPage() {
  
  const {
    loggedIn,
    dogs,
    setDogID,
    sortDogAToZ,
    sortDogZToA,
    searchDog,
  } = useContext(AppContext);

  window.onload = AuthDetails();

  const [searchValue, setSearchValue] = useState("");
  const [currentDogs, setCurrentDogs] = useState(dogs);
  const [reload, setReload] = useState(true);

  const navigate = useNavigate();

  function handleAddDog() {
    navigate("/add-dog");
  }

  function handleDogDetails(dogID) {
    setDogID(dogID);
    navigate(`/dog/${dogID}`);
  }

  async function handleSortSelect() {

    const sortSelect = document.getElementById("sort");
    const sortValue = sortSelect.value;

    setReload(false);
    setSearchValue("");

    if (sortValue == "AToZ") {
      setCurrentDogs(await sortDogAToZ());
    } else if (sortValue == "ZToA") {
      setCurrentDogs(await sortDogZToA());
    } else {
      setCurrentDogs(dogs)
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchDog();
  };

  async function handleSearchDog() {
    if (searchValue.trim().length != 0) {
      setCurrentDogs(await searchDog(searchValue));
    }
  }

  function handleUpdateSearch(value) {
    setCurrentDogs(dogs);
    setSearchValue(value);
  }

  return loggedIn ? (
    <div className="dashboard-page">
      <NavBar />

      <div className="search-div">
        {/* Add Dog */}
        <div className="add-dog-container-div">
          <button className="add-dog-btn" onClick={() => handleAddDog()}>
            + Add Dog
          </button>
        </div>

        {/* Search */}
        <div className="search-container-div">
          <form className="form-styling" onSubmit={handleSearchSubmit}>
            <div className="search-container-div-align">
              <input
                type="search"
                id="mySearch"
                placeholder="Search by name or breed ..."
                className="dashboard-search"
                onChange={(e) => handleUpdateSearch(e.target.value)}
              />
              <button
                type="submit"
                className="dashboard-search-button"
              ></button>
            </div>
          </form>
        </div>

        {/* Sort */}
        <div className="filter-container-div">
          <select
            className="select-sort"
            name="sort-types"
            id="sort"
            defaultValue="none"
            onChange={() => handleSortSelect()}
          >
            <option value="none" disabled hidden>
              Sort: none
            </option>
            <option value="None">None</option>
            <option value="AToZ">A to Z</option>
            <option value="ZToA">Z to A</option>
          </select>
        </div>
      </div>

      {/* Dog Cards */}
      <div className="dog-cards-flex">
        {reload
          ? // On Reload
            dogs.map(function (dog, i) {
              return (
                <div className="dog-card" key={i}>
                  <button
                    className="dashboard-card-btn"
                    onClick={() => handleDogDetails(dog["_id"])}
                  >
                    <DashboardCard
                      name={dog["name"]}
                      breed={dog["breed"]}
                      age={dog["age"]}
                    />
                  </button>
                </div>
              );
            })
          : // Sort/Search Activated
            currentDogs.map(function (dog, i) {
              return (
                <div className="dog-card" key={i}>
                  <button
                    className="dashboard-card-btn"
                    onClick={() => handleDogDetails(dog["_id"])}
                  >
                    <DashboardCard
                      name={dog["name"]}
                      breed={dog["breed"]}
                      age={dog["age"]}
                    />
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  ) : (
    <LoginPage />
  );
}

export default DashboardPage;
