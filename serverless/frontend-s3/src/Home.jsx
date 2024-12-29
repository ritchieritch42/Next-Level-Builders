import { Box, Typography } from "@mui/material";
import "./Home.css";

function Home() {
  return (
    <Box className="homepage">
      <Box className="homepage-introduction">
        <Box
          alt="A picture of Union Station and the Downtown Kansas City Area"
          className="homepage-introduction-image"
          component="img"
          src="/kc-andrew-peterson.jpg"
        />
        <Box className="homepage-introduction-header">
          <Box className="homepage-introduction-header-spacer">
            <Typography
              className="homepage-introduction-header-text"
              variant="h4"
            >
              Providing cost-effective construction solutions with integrity
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
