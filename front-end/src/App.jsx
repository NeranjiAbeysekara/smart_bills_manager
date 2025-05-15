import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyDocuments from './pages/MyDocuments';
import EditDocument from './components/EditDocument';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyDocuments />} />
        <Route path="/edit-document" element={<EditDocument />} />
      </Routes>
    </Router>
  );
}

export default App;
