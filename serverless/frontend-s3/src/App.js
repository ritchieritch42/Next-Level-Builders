import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import NavigationBar from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
            <NavigationBar /> {/* Navigation bar will appear on every page */}
            <Routes>
                {/* Define the component for each route */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
    </div>
  );
}

export default App;
