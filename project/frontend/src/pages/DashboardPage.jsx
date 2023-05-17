import "../css/DashboardPage.css";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
// import './App.css'
import { AppContext } from "../AppContextProvider";

import NavBar from "../components/NavBar";
import DashboardCard from "../components/DashboardCard";
import SearchIcon from "../assets/search-icon.png";
import SortIcon from "../assets/sort-icon.png";
import FilterIcon from "../assets/filter-icon.png";


function DashboardPage() {
    // const [count, setCount] = useState(0)
  
    // const {
    //   addUser,
    //   // addDog
    // } = useContext(AppContext);
  
    // async function handleAddUser() {
    //   console.log("INSIDE")
    //   // const newUser = await addDog("name", "breed", "gender", "location", "");
  
    //   const newUser = await addUser("name", "email", "password", "role", "image");
    //   console.log(newUser);
    // }
  
    return (
      // <>
      //   <h1>Vite + React</h1>
      //   <div className="card">
      //     <button onClick={() => {
      //         handleAddUser();
      //         setCount(count + 1);
      //       }}>
      //       count is {count}
      //     </button>
      //   </div>
      // </>



    <div className="dashboard-page">
    <NavBar />

    <div className="search-div">
        <div className="search-container-div">
            <input type="text" placeholder="Search by name, breed etc." className="dashboard-search" />
            <button className="dashboard-search-button"></button>
        </div>
        <div className="filter-container-div">
            <button className="sort-btn"></button>
            <button className="filter-btn"></button>
        </div>
    </div>


    <div className="dashboard-panel">
        <table className="dashboard-table" id="dashboard-table">
                <tbody>
                    <tr>
                        <td><Link className="dashboard-card-link" to="/dog/:id"><DashboardCard /></Link></td>
                        <td><DashboardCard /></td>
                        <td><DashboardCard /></td>
                        <td><DashboardCard /></td>
                    </tr>
                    <tr>
                        <td><DashboardCard /></td>
                        <td><DashboardCard /></td>
                        <td><DashboardCard /></td>
                        <td><DashboardCard /></td>
                    </tr>
                </tbody>
            </table>
    </div>
    </div>
    )
  }
  
  export default DashboardPage
  