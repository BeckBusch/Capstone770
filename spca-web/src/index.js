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
import SignInPage from './pages/sign-in-page';
import DashboardPage from './pages/dashboard-page';
import MyAccountPage from './pages/my-account-page';
import DogDetailPage from './pages/dog-detail-page';
import AddDataPage from './pages/add-data-page';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <LoginPage/>,
  },
  {
    path: "sign-in",
    element: <SignInPage/>,
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
    element: <DogDetailPage/>,
  },
  {
    path: "add-data",
    element: <AddDataPage/>,
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
