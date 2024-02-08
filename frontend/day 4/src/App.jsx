// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Album from './pages/Album';
import ProfileForm from './pages/ProfileForm';
import ProfileView from './pages/ProfileView';
import Faq from './pages/Faq';
import SignUp from './pages/Register';
import Trainer from './pages/Trainer';
import AdminLogin from './pages/AdminLogin';
import AdminDash from './pages/AdminDash';

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleProfileEdit = () => {
    // Handle the profile editing here
    // You can show a form or a modal for editing the details
    console.log('Editing profile...');
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/register"
          element={<SignUp />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/album"
          element={<Album />}
        />
         <Route
          path="/faq"
          element={<Faq />}
        />
        <Route
          path="/trainer"
          element={<Trainer />}
        />
        <Route
          path="/my-profile"
          element={
            submittedData ? (
              <ProfileView profileData={submittedData} onEdit={handleProfileEdit} />
            ) : (
              <ProfileForm onSubmit={handleFormSubmit} />
            )
          }
        />
         <Route
          path="/adminlogin"
          element={<AdminLogin />}
        />
        <Route
          path="/admindash"
          element={<AdminDash />}
        />
      </Routes>
    </Router>
  );
};

export default App;
