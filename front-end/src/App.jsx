import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyDocuments from './pages/MyDocuments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyDocuments />} />
      </Routes>
    </Router>
  );
}

export default App;
