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

  async function handleRoleSelect() {
    const sortSelect = document.getElementById("selectRole");
    const sortValue = sortSelect.value;

    setReload(false);
    setSearchValue("");
    if (sortValue == "Admin") {
      setCurrentUsers(await getAdmins());
    } else if (sortValue == "Vet") {
      setCurrentUsers(await getVets());
    } else if (sortValue == "Volunteer") {
      setCurrentUsers(await getVolunteers());
    } else {
      setCurrentUsers(users);
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
    setCurrentUsers(users);
    setReload(false);
  }

  return (
    <div className="manage-users-page">
      <NavBar />
      <div className="manage-users-page-content">
        {/* <div className="manage-header-container">
          <img
            src={SettingsBlackIcon}
            className="settings-icon-align"
            alt="start"
          />
          <h1 className="manage-users-header">Manage Users</h1>
        </div> */}
        <div className="options-container">
          <div className="three-columns-grid">
            <div className="col-one">
              <label htmlFor="Username/Email">Search Users</label>
              <div className="search-user-div">
                <form onSubmit={handleSearchSubmit}>
                  <div className="manage-user-container-div-align">
                    <input
                      type="search"
                      id="manageUserSearch"
                      placeholder="Search by name or email ..."
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
              <label htmlFor="UserType">Role</label>
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

            <div className="col-three">
              <label></label>
              <div>
                <Link to="/add-user">
                  <button className="add-user-btn">
                    + Add User
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="all-users-div">
          <label id="num-of-users">Users ({currentUsers.length})</label>
          <div className="all-users-container">
            <div className="user-info-header">
              <p>Name</p>
              <p>Role</p>
              <p>Email</p>
              <p>Joined</p>
            </div>

            <div className="hl" />

            <div className="user-table-container">
              {reload
                ? // On Reload
                  users.map(function (user, i) {
                    return (
                      <div className="user-info" key={i}>
                        <p>{user["name"]}</p>
                        <p>{user["role"]}</p>
                        <p>{user["email"]}</p>
                        <p>
                          {new Date(user["createdAt"]).toLocaleDateString(
                            "en-GB"
                          )}
                        </p>
                      </div>
                    );
                  })
                : // Sort/Search Activated
                  currentUsers.map(function (user, i) {
                    return (
                      <div className="user-info" key={i}>
                        <p>{user["name"]}</p>
                        <p>{user["role"]}</p>
                        <p>{user["email"]}</p>
                        <p>
                          {new Date(user["createdAt"]).toLocaleDateString(
                            "en-GB"
                          )}
                        </p>
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
