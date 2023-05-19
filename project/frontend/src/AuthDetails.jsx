import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { AppContext } from "./AppContextProvider";

function AuthDetails() {

    const { users, setUserRole, setUserName, setLoggedIn } = useContext(AppContext)

    auth.onAuthStateChanged(function (user) {
        if (user) {
          setLoggedIn(true);
          getCurrentUser(user);
        } else {
          setLoggedIn(false);
        }
      });
    
      function getCurrentUser(userImpl) {
        for (const user of users) {
          if (user["email"] == userImpl["email"]) {
            setUserRole(user["role"]);
            setUserName(user["name"]);
          }
        }
      }
}

export default AuthDetails;