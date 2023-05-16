import "../css/ManageUsersPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import React,  { useEffect } from 'react';

import NavBarAdmin from "../components/nav-bar-admin";
import SettingsBlackIcon from "../assets/settings-black-icon.png";
import YesIcon from "../assets/yes-icon.png";
import YesHoverIcon from "../assets/yes-hover-icon.png";
import NoIcon from "../assets/no-icon.png";
import NoHoverIcon from "../assets/no-hover-icon.png";
import SearchIcon from "../assets/search-icon.png";
import AddUserIcon from "../assets/add-user-icon.png";


function ManageUsersPage() {  
    const {
        users
      } = useContext(AppContext);

    const renderBoard = () => { 
        const table = document.createElement('table');

        let num = users.length;
        console.log("users.length = ", num);

        var customers = new Array();
        customers.push(["", "Name", "Email", "User Type", "Joined", ""]);
        for (let i = 0; i < users.length; i++) {
            customers.push([users[i]["image"], users[i]["name"], users[i]["email"], users[i]["role"], users[i]["createdAt"], ""]);
        }        
 
        //Get the count of columns.
        var columnCount = customers[0].length;
        console.log("columnCOunt = ", columnCount);
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }

        console.log("customers: ", customers);

        console.log("customers.length = ", customers.length);
 
        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
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
          <NavBarAdmin/>   
          <div className="manage-header-container">
              <img src={SettingsBlackIcon} className="settings-icon-align" alt="start" />
              <h1 className="manage-users-header">Manage Users</h1>
          </div>        
          <div className="pending-users-container">
              <label>Pending Users ({users.length})</label>
              <div className="p-users-container">
                  <div>
                      <table className="pending-users-table" id="pendingUsersTable">
                          <thead>
                              <tr>
                                  <th></th>
                                  <th>Users</th>
                                  <th>Email</th>
                                  <th>User Type</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="profile-image"><img src={SettingsBlackIcon} className="profile-image-align" alt="start" /></td>
                                  <td>Jess Mo</td>
                                  <td>jessmo76@gmail.com</td>
                                  <td>
                                  <select className="custom-select" id="language" >
                                      <option value="English">English</option>
                                      <option value="Spanish">Spanish</option>
                                      <option value="French">French</option> 
                                  </select>
                                      {/* <div className="type-dropdown">
                                          <button className="dropdownbtn"><i className="type-arrow type-down"></i></button>
                                          <div className="type-dropdown-content">
                                              <a href="#">Vet</a>
                                              <a href="#">Volunteer</a>
                                              <a href="#">Admin</a>
                                          </div>
                                      </div>    */}
                                  </td>
                                  <td>
                                      <button className="yes-btn">
                                          {/* <img src={YesIcon} className="yes-no-btn-align" alt="start" /> */}
                                          {/* <img src={YesHoverIcon} className="yes-img-top" alt="Card Front" />  */}
                                      </button>
                                      <button className="no-btn">
                                          {/* <img src={NoIcon} className="yes-no-btn-align" alt="start" /> */}
                                          {/* <img src={NoHoverIcon} className="no-img-top" alt="start" /> */}
                                      </button>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

              </div>
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
  