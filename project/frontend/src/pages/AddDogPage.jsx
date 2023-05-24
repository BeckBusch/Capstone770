import "../css/AddDogPage.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";

function AddDogPage() {
  const { addDog } = useContext(AppContext);

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("none");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("default.png");
  const [errorMessage, setErrorMessage] = useState("");

  const dogBreedOptions = ["Golden Retriever", "Poodle", "Maltese", "Welsh Corgis", "Dachshund", "Pug", "German Shepherd", "Pomeranian"]
  const locationOptions = ["Auckland (Hobsonville) Centre", "Auckland (Mangere) Centre", "Christchurch Centre", "Dunedin Centre", "Gisborne Centre",
  "Hamilton Centre", "Hastings Centre", "Invercargill Centre", "Kaitaia Centre", "Kerikeri Centre", "Napier Centre", "Nelson Centre", "New Plymouth Centre",
  "Palmerston North Centre", "Rotorua Centre", "Taupo Centre", "Tauranga Centre", "Timaru Centre", "Wellington Centre", "Whangarei Centre"]

  const navigate = useNavigate();

  const handleAddDog = (e) => {

    e.preventDefault();
    if (isValidForm()) {
      addDog(name, breed, age, sex, location, image);
      setTimeout(() => {    
        navigate("/dashboard");
      }, 700);
    } else {
      console.log("Error: " + errorMessage);
    }
  };

  async function handleBreedSelect() {
    setBreed(document.getElementById("breed").value);
  }

  async function handleSexSelect() {
    setSex(document.getElementById("sex").value);
  }

  async function handleLocationSelect() {
    setLocation(document.getElementById("location").value);
  }

  function handleImageSelect() {
    console.log(document.getElementById("file-selector").value);
    console.log(document.getElementById("file-selector").files[0]["name"]);
    setImage(document.getElementById("file-selector").files[0]["name"])
  }

  function isValidForm() {
    if (name.length <= 0) {
      setErrorMessage("Please provide a valid name.");
      return false;
    } else if (breed.length <= 0) {
      setErrorMessage("Please provide a valid breed.");
      return false;
    } else if (age.length <= 0) {
      setErrorMessage("Please provide a valid age.");
      return false;
    } else if (sex == "none") {
      setErrorMessage("Please select a sex.");
      return false;
    } else if (location.length <= 0) {
      setErrorMessage("Please provide a valid location.");
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="add-dog-page">
      <NavBar />

      <div className="add-dog-container">
        {/* Add Dog Heading */}
        <div className="add-dog-header">
          <h1 className="add-dog-header-line-1">Add</h1>
          <h1 className="add-dog-header-line-2">Dog</h1>
        </div>

        {/* Form */}
        <div className="add-dog-form">
          <form onSubmit={handleAddDog}>
            <div className="add-dog-two-columns-grid">
              {/* Name */}
              <label htmlFor="Name">Name</label>
              <input
                className="dog-input-styling"
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* Breed */}
              <label htmlFor="Breed">Breed</label>
              <div className="dog-select-styling">
                <select
                  className="dog-select"
                  name="breed-options"
                  id="breed"
                  defaultValue="none"
                  onChange={() => handleBreedSelect()}
                >
                  <option value="none" disabled hidden>
                    Select Dog Breed
                  </option>
                  <option value="Mixed">Mixed Breed</option>
                  <option value="none" disabled>----------</option>
                  {dogBreedOptions.sort().map(function (dogBreed, i) {
                    return (
                      <option value={dogBreed} key={i}>
                        {dogBreed}
                      </option>
                    );
                  })}
                  <option value="none" disabled>----------</option>
                  <option value="Mixed">Other</option>
                </select>
              </div>

              {/* Age */}
              <label htmlFor="Age">Age</label>
              <input
                className="dog-input-styling"
                type="number"
                id="age"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              {/* Sex */}
              <label htmlFor="Sex">Sex</label>
              <div className="dog-select-styling">
                <select
                  className="dog-select"
                  name="sex-options"
                  id="sex"
                  defaultValue="none"
                  onChange={() => handleSexSelect()}
                >
                  <option value="none" disabled hidden>
                    Select
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {/* Location */}
              <label htmlFor="Location">Location</label>
              <div className="dog-select-styling">
                <select
                  className="dog-select"
                  name="location-options"
                  id="location"
                  defaultValue="none"
                  onChange={() => handleLocationSelect()}
                >
                  <option value="none" disabled hidden>
                    Select SPCA Location
                  </option>
                  {locationOptions.sort().map(function (location, i) {
                    return (
                      <option value={location} key={i}>
                        {location}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Image */}
              <label htmlFor="Image">Image</label>
              <div className="dog-image-input">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  id="file-selector"
                  // value={image}
                  onChange={() => handleImageSelect()}
                ></input>
              </div>
            </div>
            {/* Error Message */}
            <div className="add-dog-error-msg text-align-right">
              <p>{errorMessage}</p>
            </div>
            {/* Buttons */}
            <div className="add-dog-buttons-div">
              <div className="add-dog-buttons">
                <Link to="/dashboard">
                  <button className="cancel-btn">Cancel</button>
                </Link>
                <button type="submit" id="signUpBtn" className="add-btn">
                  + Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDogPage;
