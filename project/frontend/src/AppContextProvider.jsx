import React, { useState } from 'react';
import useGet from './hooks/useGet';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

const AppContext = React.createContext({
    dogs: [],
    users: []
});

function AppContextProvider({ children }) {

    // Sets up the app to fetch the dogs from a REST API.
    const {
        data: dogs,
        isLoading: dogsLoading,
        refresh: refreshDogs
    } = useGet(`${API_BASE_URL}/api/dogs`, []);


    // Sets up the app to fetch the users from a REST API.
    const {
        data: users,
        isLoading: usersLoading,
        refresh: refreshUsers
    } = useGet(`${API_BASE_URL}/api/users`, []);

    /**
     * First, uploads the given image to the server, and retrieves the URL pointing to that image.
     * Then, saves the article itself, and returns the server representation of the article which
     * will ahve the id and date assigned.
     * 
     * TODO Error handling...
     */
    async function addDog(name, breed, age, gender, location, image) {

        // const imgUploadConfig = {
        //     headers: {
        //         'content-encoding': 'base64',
        //         'content-type': 'image/png'
        //     }
        // };

        // const imgFormData = new FormData();
        // imgFormData.append('image', image);
        // const imgUploadResponse = await axios.post(`${API_BASE_URL}/api/images`, imgFormData, imgUploadConfig);

        // const imageUrl = imgUploadResponse.headers['location'];

        const dogToUpload = {
            name,
            breed,
            age,
            gender,
            location,
            image,
        };

        const dogResponse = await axios.post(`${API_BASE_URL}/api/dogs`, dogToUpload);
        refreshDogs();
        return dogResponse.data;
    }


    async function addUser(name, email, password, role, image) {

        // const imgUploadConfig = {
        //     headers: {
        //         'content-encoding': 'base64',
        //         'content-type': 'image/png'
        //     }
        // };

        // const imgFormData = new FormData();
        // imgFormData.append('image', image);
        // const imgUploadResponse = await axios.post(`${API_BASE_URL}/api/images`, imgFormData, imgUploadConfig);

        // const imageUrl = imgUploadResponse.headers['location'];

        const userToUpload = {
            name,
            email,
            password,
            role,
            image
        };

        const userResponse = await axios.post(`${API_BASE_URL}/api/users`, userToUpload);
        refreshUsers();
        return userResponse.data;
    }

    const [loggedIn, setLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")
    const [userID, setUserID] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userRole, setUserRole] = useState("")
    const [userJoined, setUserJoined] = useState("")
    const [userImage, setUserImage] = useState("")
    const [dogID, setDogID] = useState("")


    // The context value that will be supplied to any descendants of this component.
    const context = {
        dogs,
        users,
        dogsLoading,
        usersLoading,
        addDog,
        addUser,
        loggedIn,
        setLoggedIn,
        userName,
        setUserName,
        userID,
        setUserID,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        userRole,
        setUserRole,
        userJoined,
        setUserJoined,
        userImage,
        setUserImage,
        dogID,
        setDogID
    }

    // Wraps the given child components in a Provider for the above context.
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}

export {
    AppContext,
    AppContextProvider
};