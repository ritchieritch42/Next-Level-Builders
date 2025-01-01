import { createTheme } from "@mui/material";
import "./Font.css";

const theme = createTheme({
  typography: {
    // Apply Montserrat globally for all typography variants
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    background: {
      default: "#ffffff",
      paper: "#38393b",
    },
    primary: {
      main: "rgba(56, 57, 59, 0.75)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
  // Remove specific variant overrides as they're no longer needed
});

export default theme;
