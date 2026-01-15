import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Competences from './pages/Competences';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="d-flex flex-column min-vh-100 w-100" style={{ position: 'relative', overflowX: 'hidden' }}>
        {/* Background Effects */}
        <div className="bg-pattern">
          <div className="bg-gradient-blur-1"></div>
          <div className="bg-gradient-blur-2"></div>
        </div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
