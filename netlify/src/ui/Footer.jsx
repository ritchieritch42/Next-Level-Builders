import Text from "./Text";
import { SiNetlify } from "react-icons/si";
import Box from "./Box";
import Card from "./Card";
import Line from "./Line";

function Footer() {
  return (
    <Box margin="20px 0px" stack="vertical">
      <Box wrap="nowrap">
        <Line width="95%" color="var(--color-neutral-light)" />
      </Box>
      <Box gap="2px" stack="vertical">
        <Text color="var(--color-tan-100)">
          &copy; 2025 Next Level Builders, LLC
        </Text>
        <Text color="var(--color-tan-100)">All Rights Reserved</Text>

        <Text alignment="center" color="var(--color-tan-100)">
          Hosted on Netlify
        </Text>
        <a href="https://www.netlify.com/" target="_blank">
          <SiNetlify size={30} style={{ fill: "var(--color-tan-100)" }} />
        </a>
      </Box>
    </Box>
  );
}

export default Footer;
