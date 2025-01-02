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
      <Box className="homepage-services">
        <Box className="homepage-services-header">
          <Typography className="homepage-services-header-text" variant="h4">
            Builds Include
          </Typography>
        </Box>
        <Box className="homepage-services-types">
          <Box className="homepage-services-types-container">
            <Box
              className="homepage-services-types-image"
              component="img"
              src="/commercial1x1.png"
            />
            <Typography className="homepage-services-types-text" variant="h5">
              Commercial
            </Typography>
          </Box>
          <Box className="homepage-services-types-container">
            <Box
              className="homepage-services-types-image"
              component="img"
              src="/industrial.jpg"
            />
            <Typography className="homepage-services-types-text" variant="h5">
              Light Industrial
            </Typography>
          </Box>
          <Box className="homepage-services-types-container">
            <Box
              className="homepage-services-types-image"
              component="img"
              src="/tenantfinish.jpg"
            />
            <Typography className="homepage-services-types-text" variant="h5">
              Tenant Finish
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="homepage-featuredproject">
        <Typography className="homepage-featuredproject-text" variant="h3">
          Featured Project
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
