import "../css/AddDogPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import MyAccountIcon from "../assets/my-account-icon.png";
import AddDogIcon from "../assets/dog-footprint-image.png";


function AddDogPage() {  
    const {
        addDog
    } = useContext(AppContext);

    async function handleAddDog() {
    var name = document.getElementById("name").value;
    console.log("name = ", name);
    var breed = document.getElementById("breed").value;
    console.log("breed = ", breed);
    var age = document.getElementById("age").value;
    console.log("age = ", age);
    var gender = document.getElementById("gender").value;
    console.log("gender = ", gender);
    var location = document.getElementById("location").value;
    console.log("location = ", location);   

    addDog(name, breed, age, gender, location, "");

    console.log("newDog");
  }

    return (
      <div className="add-dog-page">
            <NavBar/>   
            <div className="add-dog-header-container">
                <img src={AddDogIcon} className="add-dog-icon-align" alt="start" />
                <h1 className="add-dog-header">Add Dog</h1>
            </div> 
            <div className="add-dog-details-container">
                <div className="two-columns-add-dog">
                    <div className="two-columns-add-dog-col-1">
                        <div>
                            <div className="add-dog-profile-container">
                                <img className="profile-img" src={MyAccountIcon} alt="Profile Image" />
                            </div>
                            <p className="add-photo-msg"><Link to="/dashboard">+ Add Photo</Link> </p>
                        </div>
                    </div>
                    <div className="two-columns-add-dog-col-2">
                        <form>
                            <div className="add-dog-details-two-columns-grid">
                                <div>
                                    <label htmlFor="Name">Name</label>
                                </div>
                                <div>
                                    <input className="input-style" type="text" id="name" placeholder="Name" />
                                </div>

                                <div> 
                                    <label htmlFor="Breed">Breed</label>
                                </div>
                                <div>
                                    <input className="input-style" type="text" id="breed" placeholder="Breed" />
                                </div>

                                <div>
                                    <label htmlFor="Age">Age</label>
                                </div>
                                <div>
                                    <input className="input-style" type="text" id="age" placeholder="Age" />
                                </div>

                                <div>
                                    <label htmlFor="Gender">Gender</label>
                                </div>
                                <div>
                                    <select className="add-dog-select-style" name="gender-type" id="gender" defaultValue={"none"}>
                                        <option value="none" disabled hidden>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="Location">Location</label>
                                </div>
                                <div>
                                    <input className="input-style" type="text" id="location" placeholder="Location" />
                                </div>

                                {/* <div>
                                    <select className="select-role-style" name="role-types" id="role" defaultValue={"none"}>
                                        <option value="none" disabled hidden>Select an Option</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Staff">Staff</option>
                                        <option value="Volunteer">Volunteer</option>
                                    </select>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="button-container">
                        <div className="buttons">
                            <Link to="/dashboard">
                                <button type="submit" id="cancelBtn" className="cancel-btn">Cancel</button>
                            </Link>
                            <Link to="/dashboard">
                                <button 
                                type="submit" 
                                id="saveBtn" 
                                className="save-btn"
                                onClick={() => {
                                    handleAddDog();
                                }}
                                >Save</button>
                            </Link>
                        </div>
                </div>
            </div>       
        </div>
    )
  }
  
  export default AddDogPage
  