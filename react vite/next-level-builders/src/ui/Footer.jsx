import Text from "./Text";
import { SiNetlify } from "react-icons/si";
import Box from "./Box";
import Card from "./Card";

function Footer() {
  return (
    <Card>
      <Box placement="center">
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
    </Card>
  );
}

export default Footer;
