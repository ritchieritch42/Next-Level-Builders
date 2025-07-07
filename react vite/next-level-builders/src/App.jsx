import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
