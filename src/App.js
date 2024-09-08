import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Pages
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Experiences from './components/pages/Experiences'
<<<<<<< HEAD
import Passions from './components/pages/Passions';
import Courses from './components/pages/Courses';
=======
>>>>>>> origin/master
import Contact from './components/pages/Contact'

import Navigation from './components/Navbar/Navigation';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <Router basename="/cv-digital">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/*" element={<NotFound />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/passions" element={<Passions />} />
        <Route path="/courses" element={<Courses />} />
=======
        <Route path="*" element={<NotFound />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
>>>>>>> origin/master
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
