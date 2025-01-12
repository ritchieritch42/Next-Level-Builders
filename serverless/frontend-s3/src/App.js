import About from "./About";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import theme from "./Theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
