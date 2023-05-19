import React, { useState } from 'react';
import useGet from './hooks/useGet';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

const AppContext = React.createContext({
    dogs: [],
    users: [],
    weights: [],
    chats: []
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

    // Sets up the app to fetch the chats from a REST API.
    const {
        data: chats,
        isLoading: chatsLoading,
        refresh: refreshChats
    } = useGet(`${API_BASE_URL}/api/chats`, []);

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

    async function addChat(summary, discussion, user) {

        const chatToUpload = {
            summary,
            discussion,
            user
        };

        const chatResponse = await axios.post(`${API_BASE_URL}/api/chats`, chatToUpload);
        refreshChats();
        return chatResponse.data;
    }

    async function getAllDogs() {
        const dogResponse = await axios.get(`${API_BASE_URL}/api/dogs`);
        refreshDogs();
        return dogResponse.data;
    }

    async function sortDogAToZ() {
        const dogSortResponse = await axios.get(`${API_BASE_URL}/api/dogs/sort-a-to-z`);
        refreshDogs();
        return dogSortResponse.data;
    }

    async function sortDogZToA() {
        const dogSortResponse = await axios.get(`${API_BASE_URL}/api/dogs/sort-z-to-a`);
        refreshDogs();
        return dogSortResponse.data;
    }

    async function searchDog(search) {
        const dogSearchResponse = await axios.get(`${API_BASE_URL}/api/dogs/${search}`);
        refreshDogs();
        return dogSearchResponse.data;
    }

    async function getWeights() {
        const weightResponse = await axios.get(`${API_BASE_URL}/api/weights`);
        refreshWeights();
        return weightResponse.data;
    }

    async function getWeightDate() {
        const weightResponse = await axios.get(`${API_BASE_URL}/api/weights/date`);
        refreshWeights();
        return weightResponse.data;
    }


    async function getCurrentChatData(id) {        
        const chatResponse = await axios.get(`${API_BASE_URL}/api/chats/${id}`);
        refreshChats();
        return chatResponse.data;
    }

    const [loggedIn, setLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")
    const [userRole, setUserRole] = useState("")
    const [dogID, setDogID] = useState("")
    const [scaleID, setscaleID] = useState("none")
    const [currentChatID, setCurrentChatID] = useState(-1)

    // The context value that will be supplied to any descendants of this component.
    const context = {
        dogs,
        dogsLoading,
        dogID,
        setDogID,
        addDog,
        getAllDogs,
        sortDogAToZ,
        sortDogZToA,
        searchDog,

        users,
        usersLoading,
        addUser,
        loggedIn,
        setLoggedIn,
        userName,
        setUserName,
        userRole,
        setUserRole,

        weights,
        weightsLoading,
        addWeight,
        getWeights,
        getWeightDate,
        scaleID,
        setscaleID,
      
        chats,
        chatsLoading,
        addChat,
        currentChatID,
        setCurrentChatID,
        getCurrentChatData,
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