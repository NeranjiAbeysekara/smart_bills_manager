import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './pages/EditProfile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/editprofile'element={<EditProfile/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

