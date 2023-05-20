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
    sortDogZToA,
    searchDog,
  } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");
  const [currentDogs, setCurrentDogs] = useState(dogs);
  const [reload, setReload] = useState(true);

  window.onload = AuthDetails();

  const navigate = useNavigate();
  function navigateToAddDog() {
    navigate("/add-dog");
  }

  function navigateToDogDetails(str) {
    setDogID(str);
    navigate(`/dog/${str}`);
  }

  const [sort, setSort] = useState(true);

  function sortAlphabetically() {
    setReload(false);
    setSort(!sort);
    handleSortDogs();
  }

  async function handleSortDogs() {
    sort
      ? setCurrentDogs(await sortDogAToZ())
      : setCurrentDogs(await sortDogZToA());
  }

  async function handleGetAllDogs() {
    await getAllDogs();
  }

  const handleSearch = (e) => {
    console.log("Handle Search");
    e.preventDefault();
    getSearchResults();
  };

  async function getSearchResults() {
    console.log(searchValue.trim().length);
    if (searchValue.trim().length != 0) {
      console.log("Before Search");
      const search = await searchDog(searchValue);
      console.log("After Search");
      setCurrentDogs(search);
    }
  }

  function updateSearchValue(value) {
    setCurrentDogs(dogs);
    setSearchValue(value);
  }

  return loggedIn ? (
    <div className="dashboard-page">
      <NavBar />

      <div className="search-div">
        {/* Add Dog */}
        <div className="add-dog-container-div">
          <button className="add-dog-btn" onClick={() => navigateToAddDog()}>
            + Add Dog
          </button>
        </div>

        {/* Search */}
        <div className="search-container-div">
          <form className="form-styling" onSubmit={handleSearch}>
            <div className="search-container-div-align">
              <input
                type="search"
                id="mySearch"
                placeholder="Search by name, breed etc."
                className="dashboard-search"
                onChange={(e) => updateSearchValue(e.target.value)}
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
                    onClick={() => navigateToDogDetails(dog["_id"])}
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
                    onClick={() => navigateToDogDetails(dog["_id"])}
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
