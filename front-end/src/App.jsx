import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './pages/EditProfile';
import UploadPage from './pages/UploadPage';
import DocumentDetailsPage from './pages/DocumentDetailsPage';
import MyDocuments from './pages/MyDocuments';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/editprofile'element={<EditProfile/>}/>
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/documents" element={<MyDocuments />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

