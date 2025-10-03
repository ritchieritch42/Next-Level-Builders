import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router";
import GlobalStyles from "./Styles/GlobalStyles";

import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StyleSheetManager>
    </>
  );
}

export default App;
