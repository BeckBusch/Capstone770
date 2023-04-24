import React from "react";
import "./dashboard.css";
import NavBar from "../components/nav-bar";
import DashboardCard from "../components/dashboard-card";

function DashboardPage() {
    return (
        // <div>Successfully Logged In! This is where the dashboard should be</div> 

        <div className="dashboard-page">
            <NavBar/>

            <div className="search-div">
                <input type="text" placeholder="Search by name, breed etc." className="dashboard-search"/>
                <img className="search-btn" src={require("../images/search-icon.png")} alt="Search" />
            </div>


            <div className="dashboard-panel">
            <DashboardCard/>
            <DashboardCard/>
            <DashboardCard/>
            <DashboardCard/>
            </div>



        </div>

    );
}

export default DashboardPage;
