import { createTheme } from "@mui/material";
import "./Font.css";
/*
COLOR GUIDE
Dark teal - #133236
Not as dark teal - #1a4348
Yellow - #996d1f
Red - #b35090
*/

const theme = createTheme({
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
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h4" },
          style: { fontFamily: "Montserrat" },
        },
      ],
    },
  },
});

export default theme;
