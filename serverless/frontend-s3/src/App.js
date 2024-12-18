import About from './About';
import { Box } from '@mui/material';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import NavigationBar from './Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Box className="App">
            <NavigationBar /> {/* Navigation bar will appear on every page */}
            <Routes>
                {/* Define the component for each route */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
    </Box>
  );
}

export default App;
