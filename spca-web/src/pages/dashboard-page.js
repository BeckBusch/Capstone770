import React from "react";
import "./dashboard-page.css";
import NavBar from "../components/nav-bar";
import DashboardCard from "../components/dashboard-card";


import Data from "../mock.json";

function DashboardPage() {

    let data = Data;

    return (
        // <div>Successfully Logged In! This is where the dashboard should be</div> 

        <div className="dashboard-page">
            <NavBar/>

            <div className="search-div">
                <input type="text" placeholder="Search by name, breed etc." className="dashboard-search"/>
                <img className="search-btn" src={require("../images/search-icon.png")} alt="Search" />
            </div>


            <div className="dashboard-panel">

            {data.Dogs.map((dog: Dogs) => {
                return <DashboardCard name={dog.name} breed={dog.breed} age={dog.age}/>
            })}


            </div>
        </div>
    );
}

export default DashboardPage;
