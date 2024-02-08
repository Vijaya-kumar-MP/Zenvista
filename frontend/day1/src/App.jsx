// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimpleBottomNavigation from './components/bottomnav';
import ProfileForm from './pages/ProfileForm';
import ProfileView from './pages/ProfileView';
import Home from './pages/Home';
import About from './pages/about';
import Login from './pages/Login';
import Signup from './pages/Signup'; // Import the Signup component

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleProfileEdit = () => {
    // Handle the profile editing here
    // You can show a form or a modal for editing the details
  };

  return (
    <Router>
      <SimpleBottomNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Add the Signup route */}
        <Route
          path="/profile-form"
          element={
            submittedData ? (
              <ProfileView profileData={submittedData} onEdit={handleProfileEdit} />
            ) : (
              <ProfileForm onSubmit={handleFormSubmit} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
