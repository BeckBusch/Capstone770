import "../css/ManageUsersPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import { useEffect } from 'react';

import NavBar from "../components/NavBar";
import SettingsBlackIcon from "../assets/icon-settings-black.png";
import SearchIcon from "../assets/icon-search-dark-grey.png";
import AddUserIcon from "../assets/icon-add-user-white.png";

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
            var d = new Date(user["createdAt"]);
            var date = d.toLocaleDateString('en-GB');
            allUsers.push([user["name"], user["email"], user["role"], date]);
            // user["createdAt"].slice(0, 10)
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

    async function handleUserTypeSelect() {
    }

    return (
      <div className="manage-users-page">
          <NavBar/>   
          <div className="manage-users-page-content">
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
                      {/* Search  */}
                      <div className="search-user-div">
                        <form>
                            <div className="manage-user-container-div-align">
                            <input
                                type="search"
                                id="manageUserSearch"
                                placeholder="Search"
                                className="manage-user-search"
                            />
                            <button
                                type="submit"
                                className="manage-user-search-button"
                            ></button>
                            </div>
                        </form>
                      </div>
                  </div>

                  <div className="col-two">
                        {/* User type */}
                      <div>
                          <label htmlFor="UserType">User Type</label>
                      </div>
                      <div className="type">
                        <div className="user-type-select-styling">
                            <select
                            className="user-type-select"
                            name="user-type-options"
                            id="user-type-select"
                            defaultValue="default"
                            onChange={() => handleUserTypeSelect()}
                            >
                            <option value="default">
                                Select
                            </option>
                            <option value="none" disabled>----------</option>
                            <option value="Admin">Admin</option>
                            <option value="Vet">Vet</option>
                            <option value="Volunteer">Volunteer</option>
                            </select>
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
                <div className="user-table-container">
                    <table className="renderBoard"></table>
                </div>
              </div>
          </div>
          </div>
      </div>
    )
  }
  
  export default ManageUsersPage
  