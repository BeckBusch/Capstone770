import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import DogDetailPage from "./pages/DogDetailPage";
import AddDataPage from "./pages/AddDataPage";
import AddDataProcessingPage from "./pages/AddDataProcessingPage";
import AddDataResultsPage from "./pages/AddDataResultsPage";
import ChatPage from "./pages/ChatPage";
import ManageUsersPage from "./pages/ManageUsersPage";
import AddUserPage from "./pages/AddUserPage";
import AddDogPage from "./pages/AddDogPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add-dog" element={<AddDogPage />} />
          <Route path="/dog/:id" element={<DogDetailPage />} />
          <Route path="/dog/:id/add-data" element={<AddDataPage />} />
          <Route
            path="/dog/:id/add-data/processing"
            element={<AddDataProcessingPage />}
          />
          <Route
            path="/dog/:id/add-data/confirm"
            element={<AddDataResultsPage />}
          />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/add-chat" element={<ChatPage />} />
          <Route path="/manage-users" element={<ManageUsersPage />} />
          <Route path="/add-user" element={<AddUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
