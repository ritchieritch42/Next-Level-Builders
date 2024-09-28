import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar.js";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
