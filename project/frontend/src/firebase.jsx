import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyXgTcPjz71m4ZeOQ9crCZJKXiyJwOkwE",
    authDomain: "capstone-team10.firebaseapp.com",
    projectId: "capstone-team10",
    storageBucket: "capstone-team10.appspot.com",
    messagingSenderId: "512042065615",
    appId: "1:512042065615:web:daac1835b6850f63aee1ba",
    measurementId: "G-82QT4FMYST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
