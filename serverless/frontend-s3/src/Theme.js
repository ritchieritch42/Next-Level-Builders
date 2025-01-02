import { createTheme } from "@mui/material";
import "./Font.css";

const theme = createTheme({
  typography: {
    // Apply Montserrat globally for all typography variants
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    background: {
      default: "#38393b",
      paper: "#ffffff",
    },
    primary: {
      main: "rgba(56, 57, 59, 0.75)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
});

export default theme;
