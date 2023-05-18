import React, { useState } from 'react';
import useGet from './hooks/useGet';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

const AppContext = React.createContext({
    dogs: [],
    users: [],
    weights: []
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

    // Sets up the app to fetch the weights from a REST API.
    const {
        data: weights,
        isLoading: weightsLoading,
        refresh: refreshWeights
    } = useGet(`${API_BASE_URL}/api/weights`, []);

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


    async function addWeight(weight, scaleId, staff, staffRole) {

        const weightToUpload = {
            weight,
            scaleId,
            // dateWeighed,
            staff,
            staffRole
        };

        const weightResponse = await axios.post(`${API_BASE_URL}/api/weights`, weightToUpload);
        refreshWeights();
        return weightResponse.data;
    }

    async function getAllDogs() {
        const dogResponse = await axios.get(`${API_BASE_URL}/api/dogs`);
        refreshDogs();
        return dogResponse.data;
    }

    async function sortDog() {
        const dogSortResponse = await axios.get(`${API_BASE_URL}/api/dogs/sort`);
        refreshDogs();
        return dogSortResponse.data;
      }

      async function sortDog2() {
        const dogSortResponse = await axios.get(`${API_BASE_URL}/api/dogs/sort2`);
        refreshDogs();
        return dogSortResponse.data;
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
        getAllDogs,
        sortDog,
        sortDog2,
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
        setDogID,
        weights,
        weightsLoading,
        refreshWeights,
        addWeight
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