import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Pages
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Experiences from './components/pages/Experiences'
import Courses from './components/pages/Courses';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact'

import Navigation from './components/Navbar/Navigation';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <Router basename="/cv-digital">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
