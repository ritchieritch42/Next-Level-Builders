import { createTheme } from "@mui/material";
import "./Font.css";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif", // Apply Montserrat globally for all typography variants
  },
  palette: {
    primary: {
      main: "#38393b",
      secondary: "#323335"
    },
    mode: "light",
    background: {
      default: "#38393b",
      paper: "#014a88",
    },
    text: {
      primary: "#ffffff", // Primary text color
      secondary: "#38393b", // Secondary text color
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary, // Use primary text color for the label
          "&.Mui-focused": {
            color: theme.palette.text.primary, // Ensure label remains primary text color when focused
          },
          "&.MuiInputLabel-shrink": {
            color: theme.palette.text.primary, // Ensure label remains primary text color when shrunk
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({theme}) => ({
          backgroundColor: theme.palette.primary.secondary,
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({theme}) => ({
          backgroundColor: theme.palette.primary.secondary,
        })
      }
    }
  },
});

export default theme;
