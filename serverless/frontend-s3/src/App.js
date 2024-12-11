import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavigationBar from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';

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
    </div>
  );
}

export default App;
