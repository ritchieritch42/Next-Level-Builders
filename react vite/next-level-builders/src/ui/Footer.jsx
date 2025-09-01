import Text from "./Text";
import { SiNetlify } from "react-icons/si";
import Box from "./Box";

function Footer() {
  return (
    <Box placement="center">
      <Text color="var(--color-tan-100)">
        &copy; 2025 Next Level Builders, LLC. All Rights Reserved.
      </Text>
      <Text alignment="center" color="var(--color-tan-100)">
        Hosted on Netlify
      </Text>
      <a href="https://www.netlify.com/" target="_blank">
        <SiNetlify size={30} style={{ fill: "var(--color-tan-100)" }} />
      </a>
    </Box>
  );
}

export default Footer;
