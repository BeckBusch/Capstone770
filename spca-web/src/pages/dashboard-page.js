import React,  { useEffect } from 'react';
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
                    td.textContent = num;
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
                <input type="text" placeholder="Search by name, breed etc." className="dashboard-search" />
                <img className="search-btn" src={require("../images/search-icon.png")} alt="Search" />
            </div>


            <div className="dashboard-panel">

                {/* {data.Dogs.map((dog: Dogs) => {
                    return <DashboardCard name={dog.name} breed={dog.breed} age={dog.age} />
                })} */}
        <table className="renderBoard"></table>


            </div>
        </div>
    );
}

export default DashboardPage;
