import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./About.css";

const imageData = [
  {
    img: "./craig.jpg",
    title: "Headshot of Craig Ritchie",
  },
  {
    img: "./ulm-academic-logo-circle.png",
    title: "University of Louisiana Monroe Logo",
  },
];

function About() {
  return (
    <Box className="aboutpage">
      <Box className="aboutpage-images">
        {imageData.map((image) => {
          return (
            <img
              alt={image.title}
              className="aboutpage-image"
              src={image.img}
            />
          );
        })}
      </Box>
      <Box className="aboutpage-description">
        <Typography className="aboutpage-description-header" variant="h4">
          Craig Ritchie, Owner, 30+ Years in The Industry
        </Typography>
        <Typography
          className="aboutpage-text-description-body-text"
          variant="body1"
        >
          Craig has worked in the construction industry since graduating with a
          Construction Management degree from the University of Louisiana in
          Monroe. Craig has managed projects in all types of delivery systems
          including hard bid, negotiated and design build. He has extensive
          experience in a wide variety of construction markets including
          multi-family, light industrial, healthcare, educational, senior
          living, religious, tenant finish, warehouse construction and
          commercial building space.
        </Typography>
      </Box>
      <Box class="links">
        <Link
          href="https://www.facebook.com/profile.php?id=61572441690192"
          target="_blank"
        >
          <FacebookIcon fontSize="large" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/next-level-bldrs-llc/?viewAsMember=true"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
}

export default About;
