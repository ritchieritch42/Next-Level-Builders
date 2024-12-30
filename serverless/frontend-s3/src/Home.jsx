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
          <Typography className="homepage-services-header-text" variant="h2">
            Builds Include
          </Typography>
        </Box>
        <Box className="homepage-services-types">
          <Box className="homepage-services-types-commercial">
            <Box
              className="homepage-services-types-commercial-image"
              component="img"
              src="/commercial1x1.png"
            />
            <Typography className="homepage-services-type-commercial-text">
              Commercial
            </Typography>
          </Box>
          <Box className="homepage-services-types-industrial">
            <Box
              className="homepage-services-types-industrial-image"
              component="img"
              src="/industrial.jpg"
            />
            <Typography className="homepage-services-types-industrial-text">
              Light Industrial
            </Typography>
          </Box>
          <Box className="homepage-services-types-tenantfinish">
            <Box
              className="homepage-services-types-tenantfinish-image"
              component="img"
              src="/tenantfinish.jpg"
            />
            <Typography className="homepage-services-types-tenantfinish-text">
              Tenant Finish
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
