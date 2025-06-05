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
import NotificationsPage from './pages/Notifications';
import Statistics from './pages/Statistics';
import ReceiptsPage from './pages/ReceiptsPage';
import BillsPage from './pages/Bills';
import WarrantyPage from './pages/WarrantyPage';
import AuthSocialButtons from './components/AuthSocialButtons';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/authbuttons' element={<AuthSocialButtons/>}/>
        <Route path='/warranty' element={<WarrantyPage/>}/>
        <Route path='/bills' element={<BillsPage/>}/>
        <Route path='/receipts' element={<ReceiptsPage/>}/>
        <Route path='/statistics' element={<Statistics/>}/>
        <Route path='/notifications' element={<NotificationsPage/>}/>
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

