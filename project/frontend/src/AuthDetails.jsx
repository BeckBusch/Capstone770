import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { AppContext } from "./AppContextProvider";

function AuthDetails() {
    // const [authUser, setAuthUser] = useState(null);

    // useEffect(() => {
    //     const listen = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setAuthUser(user);
    //         } else {
    //             setAuthUser(null);
    //         }
    //     });

    //     return () => {
    //         listen();
    //     }
    // }, []);

    // const userSignOut = () => {
    //     signOut(auth).then(() => {
    //         console.log('sign out successful')
    //     }).catch(error => console.log(error))
    // }

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