import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SignUpConfirmPage from './pages/SignUpConfirmPage';
import DashboardPage from './pages/DashboardPage';
import DogDetailPage from './pages/DogDetailPage';
import AddDataPage from './pages/AddDataPage';
import AddDataProcessingPage from './pages/AddDataProcessingPage';
import AddDataResultsPage from './pages/AddDataResultsPage';
import ChatPage from './pages/ChatPage';
import ManageUsersPage from './pages/ManageUsersPage';
import AddUserPage from './pages/AddUserPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="sign-up/confirm" element={<SignUpConfirmPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dog/:id" element={<DogDetailPage />} />
          <Route path="/dog/:id/add-data" element={<AddDataPage />} />
          <Route path="/dog/:id/add-data/processing" element={<AddDataProcessingPage />} />
          <Route path="/dog/:id/add-data/confirm" element={<AddDataResultsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/manage-users" element={<ManageUsersPage />} />
          <Route path="/add-user" element={<AddUserPage />} />
          <Route path="/account-settings/:id" element={<AccountSettingsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
