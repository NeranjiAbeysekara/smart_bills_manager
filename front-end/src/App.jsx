import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import MyDocuments from "./pages/MyDocuments";
import EditDocument from "./components/EditDocument";
import DocumentDetails from "./pages/DocumentDetails";
import Bills from "./pages/Bills";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyDocuments />} />
        <Route path="/edit-document" element={<EditDocument />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/document-details" element={<DocumentDetails />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
