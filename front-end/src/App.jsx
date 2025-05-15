import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './assets/Pages/SignUp/Signup';
import Login from './assets/Pages/Login/Login';
//import LandingPage from './assets/Pages/LandingPage/LandingPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>     
    </>
  )
}

export default App
