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
  const [gender, setGender] = useState("none");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleAddDog = (e) => {
    e.preventDefault();
    console.log(gender)
    if (isValidForm()) {
      addDog(name, breed, age, gender, location, image);
      navigate("/dashboard");
    } else {
      console.log("Error: " + errorMessage);
    }
  };

  async function handleGenderSelect() {
    const genderSelect = document.getElementById("gender");
    const genderValue = genderSelect.value;
    setGender(genderValue);
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
    } else if (gender == "none") {
      setErrorMessage("Please select a gender.");
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
              <input
                className="dog-input-styling"
                type="text"
                id="breed"
                placeholder="Breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
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
              {/* Gender */}
              <label htmlFor="Gender">Gender</label>
              <div className="dog-input-styling">
                <select
                  className="dog-select-style"
                  name="gender-types"
                  id="gender"
                  defaultValue="none"
                  onChange={() => handleGenderSelect()}
                >
                  <option value="none" disabled hidden>
                    Select an Option
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {/* Location */}
              <label htmlFor="Location">Location</label>
              <input
                className="dog-input-styling"
                type="Location"
                id="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              {/* Image */}
              <label htmlFor="Image">Image</label>
              <div className="dog-image-input">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  id="file-selector"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </div>
            </div>
            {/* Error Message */}
            <div className="add-user-error-msg text-align-right">
              <p>{errorMessage}</p>
            </div>
            {/* Buttons */}
            <div className="buttons-div">
              <div className="buttons">
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
