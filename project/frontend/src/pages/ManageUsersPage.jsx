import "../css/ManageUsersPage.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { useEffect } from "react";

import NavBar from "../components/NavBar";
import SettingsBlackIcon from "../assets/icon-settings-black.png";
import AddUserIcon from "../assets/icon-add-user-white.png";

import AuthDetails from "../AuthDetails";

function ManageUsersPage() {
  useContext(AppContext);

  AuthDetails();

  const { users, getAdmins, getVets, getVolunteers, searchUser } =
    useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");
  const [currentUsers, setCurrentUsers] = useState(users);
  const [reload, setReload] = useState(true);
  const [rollCount, setRollCount] = useState(0);

  async function reRender() {
    setRollCount(rollCount + 1);
    const renderBoardDiv = document.querySelector(".renderBoard");
    if (renderBoardDiv.children.length === 0) {
      const table = renderBoard();
      renderBoardDiv.appendChild(table);
    }
  }

  async function handleRoleSelect() {
    const sortSelect = document.getElementById("selectRole");
    const sortValue = sortSelect.value;

    setReload(false);
    setSearchValue("");
    if (sortValue == "Admin") {
      setCurrentUsers(await getAdmins());
    } else if (sortValue == "Vet") {
      setCurrentUsers(await getVets());
      reRender();
    } else if (sortValue == "Volunteer") {
      setCurrentUsers(await getVolunteers());
      reRender();
    } else {
      setCurrentUsers(users);
      reRender();
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchUser();
  };

  async function handleSearchUser() {
    if (searchValue.trim().length != 0) {
      setCurrentUsers(await searchUser(searchValue));
      console.log(currentUsers);
    }
  }

  function handleUpdateSearch(value) {
    setSearchValue(value);
    setCurrentUsers(dogs);
    setReload(false);
  }

//   const renderBoard = () => {
//     const table = document.createElement("table");

//     const allUsers = new Array();
//     allUsers.push(["Name", "Email", "User Type", "Joined"]);
//     for (const user of currentUsers) {
//       allUsers.push([
//         user["name"],
//         user["email"],
//         user["role"],
//         new Date(user["createdAt"]).toLocaleDateString("en-GB"),
//       ]);
//     }

//     //Get the count of columns.
//     const columnCount = allUsers[0].length;
//     //Add the header row.
//     let row = table.insertRow(-1);
//     for (let i = 0; i < columnCount; i++) {
//       const headerCell = document.createElement("TH");
//       headerCell.innerHTML = allUsers[0][i];
//       row.appendChild(headerCell);
//     }

//     //Add the data rows.
//     for (let i = 1; i < allUsers.length; i++) {
//       row = table.insertRow(-1);
//       for (let j = 0; j < columnCount; j++) {
//         const cell = row.insertCell(-1);
//         cell.innerHTML = allUsers[i][j];
//       }
//     }
//     return table;
//   };

//   useEffect(() => {
//     const renderBoardDiv = document.querySelector(".renderBoard");
//     if (renderBoardDiv.children.length === 0) {
//       const table = renderBoard();
//       renderBoardDiv.appendChild(table);
//     }
//   }, []);

  return (
    <div className="manage-users-page">
      <NavBar />
      <div className="manage-users-page-content">
        <div className="manage-header-container">
          <img
            src={SettingsBlackIcon}
            className="settings-icon-align"
            alt="start"
          />
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
                <form onSubmit={handleSearchSubmit}>
                  <div className="manage-user-container-div-align">
                    <input
                      type="search"
                      id="manageUserSearch"
                      placeholder="Search"
                      className="manage-user-search"
                      onChange={(e) => handleUpdateSearch(e.target.value)}
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
                <div className="select-role-outer">
                  <select
                    className="select-role"
                    name="role-types"
                    id="selectRole"
                    defaultValue="All"
                    onChange={() => handleRoleSelect()}
                  >
                    <option value="All">All</option>
                    <option value="none" disabled>
                      ----------
                    </option>
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
                  <button
                    type="submit"
                    id="AddUserBtn"
                    className="add-user-btn"
                  >
                    <img
                      src={AddUserIcon}
                      className="add-user-align"
                      alt="start"
                    />
                    Add User
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pending-users-container">
          <label id="num-of-users">Users ({currentUsers.length})</label>
          <div className="p-users-container">
            <div className="user-table-container">
            <div className="user-info">
                        <p> Name </p>
                        <p> Role </p>
                        <p> Email </p>
                        <p> Joined </p>
                      </div>
              {/* <table className="renderBoard" key={rollCount}></table> */}
              {reload
                ? // On Reload
                  users.map(function (user, i) {
                    return (
                      <div className="user-info" key={i}>
                        <p> {user["name"]} </p>
                        <p> {user["role"]} </p>
                        <p> {user["email"]} </p>
                        <p> {new Date(user["createdAt"]).toLocaleDateString('en-GB')} </p>
                      </div>
                    );
                  })
                : // Sort/Search Activated
                  currentUsers.map(function (user, i) {
                    return (
                        <div className="user-info" key={i}>
                        {user["name"]} 
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsersPage;
