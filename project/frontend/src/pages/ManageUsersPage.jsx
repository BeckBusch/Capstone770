import "../css/ManageUsersPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import { useEffect } from 'react';

import NavBar from "../components/NavBar";
import SettingsBlackIcon from "../assets/settings-black-icon.png";
import MyAccountIcon from "../assets/my-account-icon-black.png";
import SearchIcon from "../assets/search-icon.png";
import AddUserIcon from "../assets/add-user-icon.png";

import AuthDetails from "../AuthDetails";

function ManageUsersPage() {  
    useContext(AppContext);

    AuthDetails();
    
    const {
        users
      } = useContext(AppContext);

    const renderBoard = () => { 
        const table = document.createElement('table');

        let num = users.length;
        console.log("users.length = ", num);

        

        const allUsers = new Array();
        allUsers.push(["Name", "Email", "User Type", "Joined"]);
        for (const user of users) {
            allUsers.push([user["name"], user["email"], user["role"], user["createdAt"].slice(0, 10)]);
        }
    
 
        //Get the count of columns.
        const columnCount = allUsers[0].length;
        console.log("columnCOunt = ", columnCount);
 
        //Add the header row.
        let row = table.insertRow(-1);
        for (let i = 0; i < columnCount; i++) {
            const headerCell = document.createElement("TH");
            headerCell.innerHTML = allUsers[0][i];
            row.appendChild(headerCell);
        }

        console.log("allUsers: ", allUsers);

        console.log("allUsers.length = ", allUsers.length);
 
        //Add the data rows.
        for (let i = 1; i < allUsers.length; i++) {
            row = table.insertRow(-1);
            for (let j = 0; j < columnCount; j++) {
                const cell = row.insertCell(-1);
                cell.innerHTML = allUsers[i][j];
            }
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
      <div className="manage-users-page">
          <NavBar/>   
          <div className="manage-header-container">
              <img src={SettingsBlackIcon} className="settings-icon-align" alt="start" />
              <h1 className="manage-users-header">Manage Users</h1>
          </div>        
          <div className="options-container">
              <div className="three-columns-grid">
                  <div className="col-one">
                      <div>
                          <label htmlFor="Username/Email">Username/Email</label>
                      </div>
                      <div className="search-user-div">
                          <input type="text" placeholder="Search" className="search-input"/>
                          <button className="search-button"><img className="search-icon" src={SearchIcon} alt="Search" /></button>
                      </div>
                  </div>

                  <div className="col-two">
                      <div>
                          <label htmlFor="UserType">User Type</label>
                      </div>
                      <div className="type">
                          <div className="option-type-dropdown">
                              <button className="dropdownbutton"><i className="option-type-arrow option-type-down"></i></button>
                              <div className="option-type-dropdown-content">
                                  <a href="#">Vet</a>
                                  <a href="#">Volunteer</a>
                              </div>
                          </div> 
                      </div> 
                  </div>

                  <div className="col-three">
                      <div>
                          <label></label>
                      </div>
                      <div>
                      <Link to="/add-user">
                          <button type="submit" id="AddUserBtn" className="add-user-btn">
                          <img src={AddUserIcon} className="add-user-align" alt="start" />
                          Add User</button>
                      </Link>
                      </div>
                  </div>
              </div>
          </div>

          <div className="pending-users-container">
              <label id="num-of-users">Users ({users.length})</label>
              <div className="p-users-container">

                <table className="renderBoard"></table>

              </div>
          </div>
      </div>
    )
  }
  
  export default ManageUsersPage
  