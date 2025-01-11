import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import "./Home.css";

const itemData = [
  {
    img: 'BVD Phase 1 Reception Desk.jpg',
    title: 'Blue Valley Dermatology Phase 1 Reception Desk',
  },
  {
    img: 'admin1.JPG',
    title: 'Administrative Desk',
  },
  {
    img: 'admin2.JPG',
    title: 'Administrative Desk',
  },
  {
    img: 'rcptn1.JPG',
    title: 'Reception Area',
  },
  {
    img: 'rcptn2.JPG',
    title: 'Reception Area',
  },
  {
    img: 'ktchn3.JPG',
    title: 'Kitchen',
  },
  {
    img: 'ktchn2.JPG',
    title: 'Kitchen',
  },
  {
    img: 'br1.JPG',
    title: 'Bathroom',
  },
  {
    img: 'office1.JPG',
    title: 'Office',
  },
];

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
        <Box className="homepage-featuredproject-header">
          <Typography className="homepage-featuredproject-header-text" variant="h3">
            Featured Project
          </Typography>
        </Box>
        <Typography className="homepage-featuredproject-description">
          Renovation of existing office space, adding 5,000 square feet of medical
          clinic to the Blue Valley Dermatology facility. The newly finished area
          includes Moh's surgery suites, Moh's and Pathology Labs, offices, exam rooms
          and reception areas. The work included demolition, carpentry, finishes,
          casework, fire sprinkler, plumbing, HVAC, electrical and fire alarm.
        </Typography>
        <ImageList sx={{ width: 900, height: 600 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Home;
