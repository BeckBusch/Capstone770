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
    searchDog
  } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");
  const [currentDog, setcurrentDog] = useState(dogs);

  console.log("currentDog = ", currentDog);

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

  async function handleSortDogs() { 
    sort ? setcurrentDog(await sortDogAToZ()) : setcurrentDog(await sortDogZToA()); 
  }
  
  async function handleGetAllDogs() { await getAllDogs(); }

  const handleSearch = (e) => {
    console.log("inside search");
    console.log("search value = ", searchValue);
    e.preventDefault();
    handleSearching();
  }

  async function handleSearching() {
    console.log(searchValue);
    const search = await searchDog(searchValue);
    console.log("searchValue:: ", search);
    setcurrentDog(search);
    // console.log("search new dog = ", currentDog);
  }

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
          <form className="form-styling" onSubmit={handleSearch}>
            <div className="search-container-div-align">
              <input
                type="search"
                id="mySearch"
                placeholder="Search by name, breed etc."
                className="dashboard-search"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="dashboard-search-button"></button>
            </div>
          </form>
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
        {currentDog.map(function (dog, i) {
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
