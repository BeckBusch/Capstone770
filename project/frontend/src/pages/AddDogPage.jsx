import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

import "../css/AddDogPage.css";
import NavBar from "../components/NavBar";
import MyAccount from "../assets/my-account-icon.png";
import AddDog from "../assets/dog-footprint-image.png";

function AddDogPage() {
  const { addDog } = useContext(AppContext);

  const [validCredentials, setvalidCredentials] = useState(false);
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
    getSelectedGender();
    checkValidForm();
    if (validCredentials) {
        console.log("VALID CRED")
      addDog(name, breed, age, gender, location, image);
      navigate("/dashboard");
      console.log("newDog");
    } else {
        console.log("Error: " + errorMessage);
    }
  }

  function getSelectedGender() {
    const x = document.getElementById("gender");
    setGender(x.options[x.selectedIndex].value);
    console.log(gender)
  }

  function checkValidForm() {
    if (name.length <= 0) {
      setErrorMessage("Please provide a valid name.");
    } else if (breed.length <= 0) {
      setErrorMessage("Please provide a valid breed.");
    } else if (age.length <= 0) {
        setErrorMessage("Please provide a valid age.");
    } else if (gender != "none") {
      setErrorMessage("Please select a gender.");
    } else if (location.length <= 0) {
        setErrorMessage("Please provide a valid location.");
    } else {
      setvalidCredentials(true);
    }
  }

  return (
    <div className="add-user-page">
      <NavBar />

      <div className="add-user-container">
        {/* Add Dog Heading */}
        <div className="add-user-header">
          <img src={AddDog} className="add-user-icon" alt="add-user" />
          <h1 className="add-user-header">Add Dog</h1>
        </div>

        {/* Form */}
        <div className="add-user-form">
          {/* Profile Column */}
          <div className="add-user-form-col-1">
            <div className="profile-container">
              <img
                className="profile-img"
                src={MyAccount}
                alt="Profile Image"
              />
            </div>
            <p className="add-photo-msg"></p>
            <div className="add-file-input">
              <input
                type="file"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                id="file-selector"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
          </div>

          {/* Form Content */}
          <div className="add-user-form-col-2">
            <form onSubmit={handleAddDog}>
              <div className="add-user-two-columns-grid">
                <div>
                  <label htmlFor="Name">Name</label>
                </div>
                <div>
                  <input
                    className="input-styling"
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="Breed">Breed</label>
                </div>
                <div>
                  <input
                    className="input-styling"
                    type="text"
                    id="breed"
                    placeholder="Breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="Age">Age</label>
                </div>
                <div>
                  <input
                    className="input-styling"
                    type="number"
                    id="age"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="Gender">Gender</label>
                </div>
                <div>
                  <select
                    className="select-style"
                    name="gender-types"
                    id="gender"
                    defaultValue={gender}
                  >
                    <option value="none" disabled hidden>
                      Select an Option
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="Location">Location</label>
                </div>
                <div>
                  <input
                    className="input-styling"
                    type="Location"
                    id="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

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
    </div>
  );
}

export default AddDogPage;
