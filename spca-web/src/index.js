import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login-page';
import SignUpPage from './pages/sign-up-page';
import DashboardPage from './pages/dashboard-page';
import MyAccountPage from './pages/my-account-page';
import DogDetailPage from './pages/dog-detail-page';
import AddDataPage from './pages/add-data-page';
import AddDataProcessingPage from './pages/add-data-processing-page';
import AddDataResultsPage from './pages/add-data-results-page';
import ManageUsersPage from './pages/manage-users-page';
import AddUserPage from './pages/add-user-page';
import SignUpConfirmPage from './pages/sign-up-confirm-page';
import ChatPage from './pages/chat-page';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <LoginPage/>,
  },
  {
    path: "sign-up",
    element: <SignUpPage/>,
  },
  {
    path: "dashboard",
    element: <DashboardPage/>,
  },
  {
    path: "my-account",
    element: <MyAccountPage/>,
  },
  {
    path: "chat",
    element: <ChatPage/>,
  },
  {
    path: "add-data",
    element: <AddDataPage/>,
  },
  {
    path: "add-data-processing",
    element: <AddDataProcessingPage/>,
  },
  {
    path: "add-data-results",
    element: <AddDataResultsPage/>,
  },
  {
    path: "dog-detail",
    element: <DogDetailPage/>,
  },
  {
    path: "manage-users",
    element: <ManageUsersPage/>,
  },
  {
    path: "add-user",
    element: <AddUserPage/>,
  },
  {
    path: "sign-up-confirm",
    element: <SignUpConfirmPage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
