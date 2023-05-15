import React,  { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./dashboard-page.css";
import NavBar from "../components/nav-bar";
import DashboardCard from "../components/dashboard-card";


import Data from "../mock.json";

function DashboardPage() {

    let data = Data;


    const renderBoard = () => { // eventually would need to pass through snakes & ladder placements, and player placements
        const table = document.createElement('table');

        let num = data.Dogs.length;
        // console.log(num);
        
        let numCol = 5;

        if (num < 5) {
            numCol = num;
        }

        let numRow = Math.ceil(num / 5)

        // add 10 rows and 10 columns to the table
        for (let i = 0; i < numRow; i++) {
            const tr = document.createElement('tr');
            // let newRow = true;
            // if (i == 0) {
            //     newRow = false;
            // }
            for (let j = 0; j < 5; j++) {
                const td = document.createElement('td');

                if (i % 2 == 0) { // even rows
                    // if (newRow) {
                    //     num -= 11;
                    //     newRow = false;
                    // }
                    td.innerHTML = <DashboardCard/>;
                    num--;
                } else {
                    // if (newRow) {
                    //     num -= 9;
                    //     newRow = false;
                    // }
                    td.textContent = num;
                    num++;
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);

            // newRow = false;
        }

        return table;
    };


  useEffect(() => {
    const renderBoardDiv = document.querySelector('.renderBoard');
    if (renderBoardDiv.children.length === 0) {
      const table = renderBoard();
      renderBoardDiv.appendChild(table);
    }
  }, []);

    return (
        // <div>Successfully Logged In! This is where the dashboard should be</div> 

        <div className="dashboard-page">
            <NavBar />

            <div className="search-div">
                <div className="search-container-div">
                    <input type="text" placeholder="Search by name, breed etc." className="dashboard-search" />
                    <button className="dashboard-search-button"><img className="search-icon" src={require("../images/search-icon.png")} alt="Search" /></button>
                </div>
                <div className="filter-container-div">
                    <button className="sort-btn"><img src={require("../images/sort-icon.png")} className="sort-filter-btn-align" alt="sort" /></button>
                    <button className="filter-btn"><img src={require("../images/filter-icon.png")} className="sort-filter-btn-align" alt="filter" /></button>
                </div>
            </div>


            <div className="dashboard-panel">
                {/* <DashboardCard /> */}

            
                {/* {data.Dogs.map((dog: Dogs) => {
                    return <DashboardCard name={dog.name} breed={dog.breed} age={dog.age} />
                })} */}
                <table className="dashboard-table" id="dashboard-table">
                        <tbody>
                            <tr>
                                <td><Link className="dashboard-card-link" to="/dog-detail"><DashboardCard /></Link></td>
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

                    <table className="renderBoard"></table>
            </div>
        </div>
    );
}

export default DashboardPage;
